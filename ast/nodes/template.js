const { BaseNode } = require("./base")
const { Line } = require("../../line")

class TemplateNode extends BaseNode {
  constructor(parent, line) {
    super(parent)
    this.line = line
  }

  static isit(line) {
    if (typeof line == "string") {
      return false
    }
    
    return false
  }

  get syntax() {
    return {}
  }

  emit() {
    return [Line(``)]
  }
}

module.exports = { TemplateNode }
