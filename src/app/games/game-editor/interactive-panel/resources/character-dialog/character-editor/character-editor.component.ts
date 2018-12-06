import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../shared/character/character';
import { AppFormTextControl } from '../../../../../../core/forms/text-control';
import { AppFormGroup } from '../../../../../../core/forms/form-group';
import { AppFormNumberControl } from '../../../../../../core/forms/number-control';
import { AppFormRow } from '../../../../../../core/forms/form-row';
import { AppFormSelectControl } from '../../../../../../core/forms/select-control';
import { Sexes } from '../../shared/character/sex';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.css']
})
export class CharacterEditorComponent implements OnInit {

  @Input() character: Character = new Character();
  public characterForm: AppFormGroup = new AppFormGroup({});

  constructor() {
  }

  ngOnInit() {
    const nameControl = new AppFormTextControl('', null, null, {
      id: 'name',
      label: '姓名',
      placeholder: '请输入姓名...',
      value: this.character.name
    });
    const ageControl = new AppFormNumberControl('', null, null, {
      id: 'age',
      label: '年龄',
      placeholder: '请输入年龄...',
      value: this.character.age
    });
    const sexControl = new AppFormSelectControl('', null, null, {
      id: 'sex',
      label: '性别',
      placeholder: '请选择性别...',
      value: this.character.sex,
      options: Sexes
    });
    sexControl.options = Sexes;
    this.characterForm.rows = [
      new AppFormRow('row1', 3, [nameControl, sexControl, ageControl])
    ];

    this.characterForm.rows.forEach(row => {
      row.controls.forEach(control => {
        this.characterForm.addControl(control.id, control);
      });
    });
  }

  saveChanges(): void {
    this.characterForm.getControls().forEach(e => {
      this.character[e.id] = e.value;
    });
    // this.character.sex = 'female';
  }

}
