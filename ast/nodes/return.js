const { BaseNode } = require("./base")
const { Line } = require("../../line")

class ReturnNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line == "string") {
      return false
    }

    return line.tokens.length > 0 && line.tokens[0] == 'return'
  }

  get value() {
    const string = this.line.line.replace(/^return\s+/, "")
    return new Program(this, [string])
  }

  emit() {
    return [Line(`return ${this.value.emit()};`)]
  }
}

module.exports = { ReturnNode }
