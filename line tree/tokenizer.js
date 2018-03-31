function tokenize(line) {
  if (!line) {
    return []
  }
  const text = line.trim()
  const tokens = text.split(/\s+/)

  return tokens
}

module.exports = { tokenize }
