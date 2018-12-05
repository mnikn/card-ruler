import { Resource } from './resource';

export class ResourceCollection {

  private _id: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  private _data: Resource[] = [];

  get data(): Resource[] {
    return this._data;
  }

  set data(value: Resource[]) {
    this._data = value;
  }

}
