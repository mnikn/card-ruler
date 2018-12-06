import * as _ from 'lodash';

import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

export class AppFormControl extends FormControl {

  constructor(formState?: any,
              validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
              asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
              controlOptions?: any) {
    super(formState, validatorOrOpts, asyncValidator);
    _.assign(this, controlOptions);
  }

  private _id: string;

  private _isDisabled = false;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _controlType: string;

  get controlType(): string {
    return this._controlType;
  }

  set controlType(value: string) {
    this._controlType = value;
  }

  private _placeholder: any;

  get placeholder(): any {
    return this._placeholder;
  }

  set placeholder(value: any) {
    this._placeholder = value;
  }

  private _label: string;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }
}
