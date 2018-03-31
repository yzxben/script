const { BaseNode } = require("./base")
const { Line } = require("../../line")
const { brace } = require("./utils")

class FunctionNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    return line.tokens[1] == "takes" && line.tokens.length > 2
  }

  get syntax() {
    const { tokens, children } = this.line
    return {
      name: tokens[0],
      params: tokens.slice(2),
      content: new Program(this, children),
    }
  }

  emit() {
    const { name, params, content } = this.syntax
    const signature = `${name}(${params.join(", ")})`

    if (this.descendsFrom(ClassNode)) {
      return brace(signature, content.emit())
    }

    return brace(`function ${signature}`, content.emit())
  }
}

module.exports = { FunctionNode }
