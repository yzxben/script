const { BaseNode } = require("./base")
const { Line } = require("../../line")

class Program extends BaseNode {
  constructor(parent, lines) {
    super(parent)
    this.lines = lines
  }

  static isit(lines) {
    return Array.isArray(lines)
  }

  get nodes() {
    return this.lines.map(line => {
      for (let [key, node] of Object.entries(nodes)) {
        if (node.isit(line)) {
          return new node(this, line)
        }
      }

      throw new Error(`Node not found for: ${line.line}`)
    })
  }

  emit(tab) {
    const emit = node => node.emit()
    return [].concat.apply([], this.nodes.map(emit))
  }
}

module.exports = { Program }
