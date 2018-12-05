import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../shared/character';
import { AppFormTextControl } from '../../../../../../core/forms/text-control';
import { AppFormGroup } from '../../../../../../core/forms/form-group';
import { AppFormNumberControl } from '../../../../../../core/forms/number-control';
import { AppFormRow } from '../../../../../../core/forms/form-row';

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
    this.characterForm.rows = [
      new AppFormRow('row1', 2, [nameControl, ageControl])
    ];

    this.characterForm.rows.forEach(row => {
      row.controls.forEach(control => {
        this.characterForm.addControl(control.id, control);
      });
    });
  }

  saveChanges(): void {
    this.characterForm.getControls().forEach(e => this.character[e.id] = e.value);
  }

}
