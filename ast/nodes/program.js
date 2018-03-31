class Program {
  constructor(lines) {
    this.lines = lines
  }

  static isit(lines) {
    return Array.isArray(lines)
  }

  get nodes() {
    return this.lines.map(line => {
      for (let [key, node] of Object.entries(nodes)) {
        if (node.isit(line)) {
          return new node(line)
        }
      }
    })
  }

  emit() {
    const lines = this.nodes.map(node => node.emit())
    return lines.join("\n")
  }
}

module.exports = { Program }
