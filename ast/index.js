const nodes = require("./nodes")

// Hack
global.nodes = nodes
Object.assign(global, nodes)

function build(lines) {
  return new Program(lines)
}

module.exports = { build }
