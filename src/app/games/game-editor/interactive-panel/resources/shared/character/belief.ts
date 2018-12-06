export class Belief {
  constructor(data: {id: string, label: string}) {
    this.id = data.id;
    this.label = data.label;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  private _label: string;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }
}

export const Beliefs: Belief[] = [
  new Belief({
    id: 'heironeous',
    label: '勇者之神-海若尼斯'
  })
];
