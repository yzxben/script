const { BaseNode } = require("./base")
const { Line } = require("../../line")

class FunctionMultilineParamNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    return line.tokens[1] == "takes" && line.tokens.length == 2
  }

  get syntax() {
    if (line.tokens.length > 2) {
    }
    return {
      name,
    }
  }

  emit() {
    return ``
  }
}

module.exports = { FunctionMultilineParamNode }
