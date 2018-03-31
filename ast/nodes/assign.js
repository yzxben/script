class AssignNode {
  constructor(line) {
    this.line = line
  }

  static isit(line) {
    return line.tokens[1] == "="
  }

  get syntax() {
    if (!this.syntax_) {
      const { line } = this
      const parts = line.raw.match(/(.*)\s=\s(.*)/)

      if (parts.length != 3) {
        throw new Error("AssignNode failed")
      }

      this.syntax_ = {
        name: parts[1],
        value: parts[2],
      }
    }

    return this.syntax_
  }

  emit() {
    const { syntax } = this
    return `${syntax.name} = ${syntax.value};`
  }
}

module.exports = { AssignNode }
