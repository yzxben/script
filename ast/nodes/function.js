const { BaseNode } = require("./base")
const { Line } = require("../../line")
const { brace } = require("./utils")

const FunctionEmitter = (node, syntax) => {
  const { name, params, content } = syntax

  const signature = `${name}(${params.join(", ")})`

  if (node.descendsDirectlyFrom(ClassNode)) {
    return brace(signature, content.emit())
  }

  return brace(`function ${signature}`, content.emit())
}

class FunctionNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line == "string") {
      return false
    }
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
    return FunctionEmitter(this, this.syntax)
  }
}

module.exports = { FunctionNode, FunctionEmitter }
