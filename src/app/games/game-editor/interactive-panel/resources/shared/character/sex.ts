export class Sex {
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

export const Sexes: Sex[] = [new Sex({
  id: 'male',
  label: '男'
}), new Sex({
  id: 'female',
  label: '女'
})];
