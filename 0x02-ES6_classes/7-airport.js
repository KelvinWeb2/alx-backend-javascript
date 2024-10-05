export default class Airport {
  constructor(name, code) {
    this._name = name; // Store name with underscore prefix
    this._code = code; // Store code with underscore prefix
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return this._code; // Default string description returns the airport code
  }
}
