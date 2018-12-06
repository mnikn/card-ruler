import { Resource } from '../resource';
import { Sexes } from './sex';
import { Races } from './race';
import { Aligments } from './alignment';
import { Beliefs } from './belief';
import { Languages } from './language';
import { Profession, Professions } from './profession';

export class Character extends Resource {
  private _age: number;
  private _sex: string = Sexes[0].id;
  private _race: string = Races[0].id;

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  private _alignment: string = Aligments[0].id;

  get alignment(): string {
    return this._alignment;
  }

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

  set alignment(value: string) {
    this._alignment = value;
  }

  private _belief: string = Beliefs[0].id;

  get belief(): string {
    return this._belief;
  }

  set belief(value: string) {
    this._belief = value;
  }

  private _languages: string[] = [Languages[0].id];

  get languages(): string[] {
    return this._languages;
  }

  set languages(value: string[]) {
    this._languages = value;
  }

  private _professions: Profession[] = [Professions[0], Professions[1]];

  get professions(): Profession[] {
    return this._professions;
  }

  set professions(value: Profession[]) {
    this._professions = value;
  }
}
