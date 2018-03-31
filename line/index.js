const { tokenize } = require("./tokenizer")
const Tab = "  "

class Line_ {
  constructor(line, children = []) {
    this.line = line
    this.children = children
  }

  get raw() {
    return this.line
  }

  hasChildren() {
    return this.children.length > 0
  }

  equals(other) {
    if (!other instanceof Line_) {
      return false
    }

    if (other.line !== this.line) {
      return false
    }

    return array_equal(this.children, other.children)
  }

  get tokens() {
    if (!this.tokens_) {
      this.tokens_ = tokenize(this.line)
    }
    return this.tokens_
  }

  serialize(tab) {
    let result = `${Tab.repeat(tab)}${this.line}`
    if (this.children.length) {
      result += this.children
        .map(line => {
          const next_tab = tab === undefined ? 1 : tab + 1
          return `\n${line.serialize(next_tab)}`
        })
        .join("")
    }
    return result
  }

  toJSON() {
    return {
      line: this.line,
      children: this.children.map(line => line.toJSON()),
    }
  }
}

const Line = (line, children) => new Line_(line, children)

module.exports = { Line }
