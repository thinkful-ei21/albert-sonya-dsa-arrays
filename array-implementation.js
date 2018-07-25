'use strict';

const mem = require('./memory.js');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  _resize(size) {
    // grab the old pointer for reference
    const oldPtr = this.ptr;
    // find new pointer for new memory location
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    // once found, copy data fro mold location to new by using old and new pointers
    memory.copy(this.ptr, oldPtr, this.length);
    // free up old pointer
    memory.free(oldPtr);
    // incrase capacity so we know to call resize once more when this.length reaches capacity again
    this._capacity = size;
  }

  get(index) {
    // check for index error
    if (index < 0 || index > this.length) {
      throw new Error('Index error');
    }
    // retrieve and return value by accessing memory via pointer plus current index
    return memory.get(this.ptr + index);
  }

  pop() {
    // check for index error
    if (this.length === 0) {
      throw new Error('Index error');
    }
    // grab to-be popped value
    const poppedValue = memory.get(this.ptr + this.length - 1);
    // decrease length
    this.length--;
    // return popped value
    return poppedValue;
  }

  push(value) {
    // check to see if resize is needed
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // set value to memory location
    memory.set(this.ptr + this.length, value);
    // increase length
    this.length++;
  }

  insert(index, value) {
    // check for index error
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    // check for resize
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // copy from old location to new
    memory.copy((this.ptr + index + 1), (this.ptr + index), (this.length - index));
    // insert value to target location
    memory.set((this.ptr + index), value);
    // increase the length
    this.length++;
  }

  remove(index) {
    // check for index error
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    // copy from old location to new
    memory.copy((this.ptr + index), (this.ptr + index + 1), (this.length - index - 1));
    // decrease the length
    this.length--;
  }

}
Array.SIZE_RATIO = 3;

module.exports = Array;