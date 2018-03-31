// TOOD multiline strings, comments, regexes

const transpile = input => {
  const lines = require("./line tree").build(input)

  const ast = require("./ast").build(lines)

  return ast.emit().map(line => line.serialize()).join("\n")
}

const input = `
a = 1
b = 2
add takes x y
  c = 3
  subtract takes z w
    d = 4
    multiply takes j k
      e = 5
  f = 6
g = 7
Test class
  divide takes p q
    h = 8
`

const input2 = `
add = function x y
  return x + y

a = 1
b = 2
c = add a b

console.log c
`

console.log(transpile(input))
