export class Alignment {
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

export const Aligments: Alignment[] = [
  new Alignment({
    id: 'lawfulGood',
    label: '守序善良'
  }), new Alignment({
    id: 'lawfulNeutral',
    label: '守序中立'
  }), new Alignment({
    id: 'lawfulEvil',
    label: '守序邪恶'
  }), new Alignment({
    id: 'neutralGood',
    label: '中立善良'
  }), new Alignment({
    id: 'absoluteNeutral',
    label: '绝对中立'
  }), new Alignment({
    id: 'neutralEvil',
    label: '中立邪恶'
  }), new Alignment({
    id: 'chaosGood',
    label: '混乱善良'
  }), new Alignment({
    id: 'chaosNeutral',
    label: '混乱中立'
  }), new Alignment({
    id: 'chaosEvil',
    label: '混乱邪恶'
  })
];
