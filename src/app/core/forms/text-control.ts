import { AppFormControl } from './form-control';

export class AppFormTextControl extends AppFormControl {
  get controlType(): string {
    return 'text';
  }
}
