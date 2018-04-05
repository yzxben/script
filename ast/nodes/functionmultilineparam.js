const { BaseNode } = require("./base")
const { Line } = require("../../line")
const { FunctionEmitter } = require("./function.js")

class FunctionMultilineParamNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line == "string") {
      return false
    }
    if (line.tokens[1] == "takes" && line.tokens.length == 2) {
      if (line.children.length > 1) {
        const last = line.children[line.children.length - 1]
        if (last.line == "then") {
          return true
        }
      }
    }
    return false
  }

  get syntax() {
    const { tokens, children } = this.line
    const last_child = children[children.length - 1]
    return {
      name: tokens[0],
      params: children.slice(0, -1).map(line => line.line),
      content: new Program(this, last_child.children),
    }
  }

  emit() {
    return FunctionEmitter(this, this.syntax)
  }
}

module.exports = { FunctionMultilineParamNode }
