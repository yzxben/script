const { BaseNode } = require("../base")
const { Line } = require("../../../line")

/*

Examples:

  1 + 1

  ~ hello
  +
  ~ world

  2
  +
  2

*/

class ExpressionNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    return (
      !LiteralNode.isit(line) &&
      !VariableNode.isit(line) &&
      typeof line == "string"
    )
  }

  get syntax() {
    return {}
  }

  emit() {
    return this.line
  }
}

module.exports = { ExpressionNode }
