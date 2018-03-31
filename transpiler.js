// TOOD multiline strings, comments, regexes

const transpile = input => {
  const lines = require("./line tree").build(input)

  const ast = require("./ast").build(lines)

  return ast.emit()
}

const input = `
a = 1
b = 2
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
