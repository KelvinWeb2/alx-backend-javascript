export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }

    this.sqft = sqft;

    // Ensure the subclass implements the evacuationWarningMessage method
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
