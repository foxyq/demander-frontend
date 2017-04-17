/* eslint-disable */
export default function() {
  String.prototype.firstUpperCase = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }
  String.prototype.spacesToDashes = function() {
    return this.replace(/\s+/g, '-').toLowerCase()
  }
  String.prototype.dashesToSpaces = function() {
    return this.replace(/\-+/g, ' ').toLowerCase()
  }
  String.prototype.underscoresToDots = function() {
    return this.replace(/\_+/g, '.')
  }
  String.prototype.dotsToUnderscores = function() {
    return this.replace(/\.+/g, '_')
  }
}
/* eslint-enable */

