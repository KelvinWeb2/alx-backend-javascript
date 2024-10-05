export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;      // Calls the setter
    this.location = location; // Calls the setter
  }

  set size(value) {
    this._size = value;  // Store in private variable
  }

  get size() {
    return this._size;   // Return private variable
  }

  set location(value) {
    this._location = value; // Store in private variable
  }

  get location() {
    return this._location;  // Return private variable
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;    // Return size for number hint
    }
    if (hint === 'string') {
      return this._location; // Return location for string hint
    }
    return undefined;       // Return undefined for other hints
  }
}
