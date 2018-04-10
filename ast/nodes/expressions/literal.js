const { BaseNode } = require("../base")
const { Line } = require("../../../line")

/*
Strings, numbers, and booleans.
*/

class LiteralNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line != "string") {
      return false
    }
    if (VariableNode.isit(line)) {
      return false
    }
    if (line.startsWith("string ")) {
      return true
    }
    if (line.match(/^(0x)?[\d\.]+$/)) {
      return true
    }
    return false
  }

  get syntax() {
    return {}
  }

  emit() {
    return this.line
  }
}

module.exports = { LiteralNode }
