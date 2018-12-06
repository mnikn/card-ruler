export class Profession {
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

  private _level = 1;

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }
}

export const Professions: Profession[] = [
  new Profession({
    id: 'fighter',
    label: '战士'
  }),
  new Profession({
    id: 'cleric',
    label: '牧师'
  })
];
