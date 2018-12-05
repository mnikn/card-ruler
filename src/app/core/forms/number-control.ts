import { AppFormControl } from './form-control';

export class AppFormNumberControl extends AppFormControl {
  get controlType(): string {
    return 'number';
  }
}
