const { array_equal } = require("./array equal")
const { Line } = require("../line")

function build(code) {
  const stack = [{ root: true, children: [] }]
  for (let line of code.split("\n")) {
    // Get leading spaces. Replace all leading tabs with 2 spaces.
    const lspaces = line.match(/^\s*/)[0].replace(/\t/g, "  ")

    var indent = lspaces.length / 2
    line = line.trim()

    const lastItemIn = array => array[array.length - 1]
    const currentIndent = () => stack.length - 1
    const currentNode = () => lastItemIn(stack)
    const lastChild = () => lastItemIn(currentNode().children)
    const addChild = object => currentNode().children.push(object)

    while (indent > currentIndent()) {
      stack.push(lastChild())
      if (indent != currentIndent()) {
        addChild(Line("", []))
      }
    }

    while (indent < currentIndent()) {
      stack.pop()
    }

    const object = Line(line, [])
    addChild(object)
  }
  return stack[0].children
}

module.exports = { build, Line }
