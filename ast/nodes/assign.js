const { BaseNode } = require("./base")
const { Line } = require("../../line")

class AssignNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    return line.tokens[1] == "="
  }

  get syntax() {
    const parts = this.line.raw.match(/(.*)\s=\s(.*)/)

    if (parts.length != 3) {
      throw new Error("AssignNode failed")
    }

    return {
      name: parts[1],
      value: parts[2],
    }
  }

  emit() {
    const { syntax } = this
    return [Line(`${syntax.name} = ${syntax.value};`)]
  }
}

module.exports = { AssignNode }
