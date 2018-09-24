import {U} from './U';

export interface IDictionary<T> {
  add(key: string, value: any): void;
  remove(key: string): void;
  containsKey(key: string): boolean;
  keys(): string[];
  values(): T[];
}

export class Dictionary<T> {
  _keys: string[] = [];
  _values: T[] = [];

  constructor(init: { key: string; value: any; }[] = null) {
    for (let x = 0; init !== null && x < init.length; x++) {
      this[init[x].key] = init[x].value;
      this._keys.push(init[x].key);
      this._values.push(init[x].value);
    }
  }

  add(key: string, value: any) {
    this[key] = value;
    this._keys.push(key);
    this._values.push(value);
  }

  remove(key: string) {
    const index = this._keys.indexOf(key, 0);
    this._keys.splice(index, 1);
    this._values.splice(index, 1);

    delete this[key];
  }

  clear() {
    const keys = Array.from(this._keys);
    for (let i = 0; i < keys.length; i++) {
      this.remove(keys[i]);
    }
  }

  keys(): string[] {
    return this._keys;
  }

  values(): T[] {
    return this._values;
  }

  containsKey(key: string) {
    return U.notNullOrUndefined(this[key]);
  }

  toLookup(): IDictionary<T> {
    return this;
  }
}
