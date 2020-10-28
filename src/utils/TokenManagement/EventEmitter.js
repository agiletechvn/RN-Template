export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  _getEventListByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set();
    }
    return this.events[eventName];
  }

  on(eventName, fn) {
    this._getEventListByName(eventName).add(fn);
  }

  once(eventName, fn) {
    const onceFn = (...args) => {
      this.removeListener(eventName, onceFn);
      fn.apply(this, args);
    };
    this.on(eventName, onceFn);
  }

  emit(eventName, ...args) {
    this._getEventListByName(eventName).forEach((fn) => {
      fn.apply(this, args);
    });
  }

  removeListener(eventName, fn) {
    this._getEventListByName(eventName).delete(fn);
  }
}
