import {U} from './U';

export interface IDictionary<T> {
  add(key: any, value: any): void;
  remove(key: any): void;
  containsKey(key: any): boolean;
  keys(): string[];
  values(): T[];
}

export class Dictionary<T> {
  _keys: string[] = [];
  _values: T[] = [];

  constructor() { }

  add(key: any, value: any) {
    const strKey = key.toString();
    this[strKey] = value;
    this._keys.push(strKey);
    this._values.push(value);
  }

  remove(key: any) {
    const strKey = key.toString();
    const index = this._keys.indexOf(strKey, 0);
    this._keys.splice(index, 1);
    this._values.splice(index, 1);

    delete this[strKey];
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

  containsKey(key: any) {
    return U.notNullOrUndefined(this[key.toString()]);
  }

  toLookup(): IDictionary<T> {
    return this;
  }
}
