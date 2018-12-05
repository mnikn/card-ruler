import { Resource } from './resource';

export class Character extends Resource {
  private _age: number;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}
