import { AppFormControl } from './form-control';

export class AppFormSelectControl extends AppFormControl {
  private _options: any[] = [];

  get options(): any[] {
    return this._options;
  }

  set options(value: any[]) {
    this._options = value;
  }

  get controlType(): string {
    return 'select';
  }
}
