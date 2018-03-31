function array_equal(a, b) {
  if (a === b) {
    return true
  }
  if (a == null || b == null) {
    return false
  }
  if (a.length != b.length) {
    return false
  }

  for (var i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      if (!Array.isArray(b[i])) {
        return false
      }

      return array_equal(a[i], b[i])
    } else {
      if (typeof a[i].equals === "function") {
        return a[i].equals(b[i])
      } else if (a[i] !== b[i]) {
        return false
      }
    }
  }

  return true
}

module.exports = { array_equal }
