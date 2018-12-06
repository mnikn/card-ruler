import { AppFormControl } from './form-control';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import * as _ from 'lodash';

export class AppFormSelectControl extends AppFormControl {
  private _options: any[] = [];

  constructor(formState?: any,
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
              controlOptions?: any) {
    super(controlOptions, validatorOrOpts, asyncValidator, controlOptions);
    this.options = _.get(controlOptions, 'options');
    this.isMultiple = _.get(controlOptions, 'isMultiple');
  }

  private _isMultiple = false;

  get options(): any[] {
    return this._options;
  }

  set options(value: any[]) {
    this._options = value;
  }

  get isMultiple(): boolean {
    return this._isMultiple;
  }

  set isMultiple(value: boolean) {
    this._isMultiple = value;
  }

  get controlType(): string {
    return 'select';
  }
}
