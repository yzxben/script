const { array_equal } = require("./array equal")
const { tokenize } = require("./tokenizer")

class Line {
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

  toJSON() {
    return {
      line: this.line,
      children: this.children.map(line => line.toJSON()),
    }
  }
}

function build(code) {
  const stack = [{ root: true, children: [] }]
  for (let line of code.split("\n")) {
    // Get leading spaces. Replace all leading tabs with 2 spaces.
    const lspaces = line.match(/^\s*/)[0].replace(/\t/g, "  ")

    var indent = lspaces.length / 2
    line = line.trim()

    if (line.length == 0) {
      continue
    }

    const lastItemIn = array => array[array.length - 1]
    const currentIndent = () => stack.length - 1
    const currentNode = () => lastItemIn(stack)
    const lastChild = () => lastItemIn(currentNode().children)
    const addChild = object => currentNode().children.push(object)

    while (indent > currentIndent()) {
      stack.push(lastChild())
      if (indent != currentIndent()) {
        addChild(new Line("", []))
      }
    }

    while (indent < currentIndent()) {
      stack.pop()
    }

    const object = new Line(line, [])
    addChild(object)
  }
  return stack[0].children
}

module.exports = { build, Line }
