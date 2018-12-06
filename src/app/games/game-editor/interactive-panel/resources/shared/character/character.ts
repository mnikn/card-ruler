import { Resource } from '../resource';
import { Sexes } from './sex';

export class Character extends Resource {
  private _age: number;
  private _sex: string = Sexes[0].id;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }
}
