const { BaseNode } = require("./base")
const { Line } = require("../../line")

/*

Examples:

  add: 1 2

  new builder-class:

  var
    to-string:

  var to-string:
    trim:
    concat: other-string

*/

class FunctionCallNode extends BaseNode {
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

module.exports = { FunctionCallNode }
