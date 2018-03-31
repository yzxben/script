const { build, Line } = require("./index.js")

function assert(expression, message) {
  if (!expression) {
    throw new Error(`Failed: ${message}`)
  }
}

const line = Line("test")
const line2 = Line("test", [])
const line3 = Line("test", [Line("test1"), Line("test2")])
const line4 = Line("test", [Line("test1"), Line("test2")])
assert(line.equals(line), "line.equals(line)")
assert(line.equals(line2), "line.equals(line2)")
assert(!line.equals(line3), "!line.equals(line3)")
assert(line3.equals(line4), "line3.equals(line4)")

const input = `
a
b
  c
    d
  e
f
`

const output = build(input)

const expected_output = [
  Line("a"),
  Line("b", [Line("c", [Line("d")]), Line("e")]),
  Line("f"),
]

assert(Line('', expected_output).equals(Line('', output)), "Line('', expected_output).equals(Line('', output))")

console.log("All OK")
