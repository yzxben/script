class BaseNode {
  constructor(parent) {
    if (parent === undefined) {
      throw new Error("Parent is required. Otherwise stuff breaks.")
    }

    this.parent = parent
  }

  static isit(line) {
    return false
  }

  emit() {
    throw new Error("Emit is undefined")
  }

  descendsFrom(other) {
    let ancestor = this.parent
    while (ancestor !== null) {
      if (ancestor instanceof other) {
        return true
      }
      ancestor = ancestor.parent
    }
    return false
  }
}

module.exports = { BaseNode }
