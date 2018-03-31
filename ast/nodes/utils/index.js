const { Line } = require("../../../line")

const brace = (name, children) => [Line(`${name} {`, children), Line(`}`)]

module.exports = { brace }
