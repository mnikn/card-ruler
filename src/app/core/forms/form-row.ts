import { AppFormControl } from './form-control';

export class AppFormRow {
  constructor(id: string, columnNumber: number = 1, controls: AppFormControl[] = []) {
    this.id = id;
    this.columnNumber = columnNumber;
    this.controls = controls;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _controls: AppFormControl[];

  get controls(): AppFormControl[] {
    return this._controls;
  }

  set controls(value: AppFormControl[]) {
    this._controls = value;
  }

  private _columnNumber: number;

  get columnNumber(): number {
    return this._columnNumber;
  }

  set columnNumber(value: number) {
    this._columnNumber = value;
  }

  get classColumnNumber(): string {
    switch (this.columnNumber) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
    }
    return '';
  }
}
