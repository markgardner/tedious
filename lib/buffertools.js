// Generated by CoffeeScript 1.6.2
if (!Buffer.concat) {
  Buffer.concat = function(buffers) {
    var buffer, length, position, result, _i, _j, _len, _len1;

    length = 0;
    for (_i = 0, _len = buffers.length; _i < _len; _i++) {
      buffer = buffers[_i];
      length += buffer.length;
    }
    result = new Buffer(length);
    position = 0;
    for (_j = 0, _len1 = buffers.length; _j < _len1; _j++) {
      buffer = buffers[_j];
      buffer.copy(result, position, 0);
      position += buffer.length;
    }
    return result;
  };
}

Buffer.prototype.toByteArray = function() {
  return Array.prototype.slice.call(this, 0);
};

Buffer.prototype.equals = function(other) {
  var b, index, _i, _len;

  if (this.length !== other.length) {
    return false;
  }
  for (index = _i = 0, _len = this.length; _i < _len; index = ++_i) {
    b = this[index];
    if (this[index] !== other[index]) {
      return false;
    }
  }
  return true;
};