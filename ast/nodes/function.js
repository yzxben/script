class FunctionNode {
  constructor(line) {
    this.line = line
  }

  static isit(line) {
    return false
  }

  get syntax() {
    if (!this.syntax_) {
      const { line } = this
      this.syntax_ = {}
    }

    return this.syntax_
  }

  emit() {
    return ``
  }
}

module.exports = { FunctionNode }
