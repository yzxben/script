const { BaseNode } = require("./base")
const { Line } = require("../../line")
const { brace } = require("./utils")

class ClassNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line == "string") {
      return false
    }
    return line.tokens[1] === "class"
  }

  get syntax() {
    return {
      name: this.line.tokens[0],
      content: new Program(this, this.line.children),
    }
  }

  emit() {
    const { name, content } = this.syntax

    return brace(`class ${name}`, content.emit())
  }
}

module.exports = { ClassNode }
