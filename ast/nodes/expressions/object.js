const { BaseNode } = require("../base")
const { Line } = require("../../../line")

/*
JSON

object a 1 b 2 c 3

object
  a 1
  b 2
  c 3

object
  a
    x 1
    y 2
  b
    z 3

object
  a ~ hello world
  b 2 + 2
  c
    add takes x y
      return x + y

*/

class ObjectNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    return line.tokens[0]
  }

  get syntax() {
    return {}
  }

  emit() {
    return this.line
  }
}

module.exports = { ObjectNode }
