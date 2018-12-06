export class Language {
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

export const Languages: Language[] = [
  new Language({
    id: 'common',
    label: '通用语'
  }),
  new Language({
    id: 'elven',
    label: '精灵语'
  })
];
