import { FormGroup } from '@angular/forms';
import { AppFormControl } from './form-control';
import * as _ from 'lodash';
import { AppFormRow } from './form-row';

export class AppFormGroup extends FormGroup {

  private _rows: AppFormRow[] = [];

  get rows(): AppFormRow[] {
    return this._rows;
  }

  set rows(value: AppFormRow[]) {
    this._rows = value;
  }

  addControl(name: string, control: AppFormControl): void {
    super.addControl(name, control);
  }

  get(path: Array<string | number> | string): AppFormControl | null {
    return (<AppFormControl>super.get(path));
  }

  public getControls(): AppFormControl[] {
    return _.values(this.controls);
  }
}
