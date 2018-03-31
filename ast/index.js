const nodes = require("./nodes")

// Hack
global.nodes = nodes
Object.assign(global, nodes)

function build(lines) {
  return new Program(null, lines)
}

module.exports = { build }
