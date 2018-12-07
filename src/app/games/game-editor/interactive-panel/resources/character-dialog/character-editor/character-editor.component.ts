import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Character } from '../../shared/character/character';
import { AppFormTextControl } from '../../../../../../core/forms/text-control';
import { AppFormGroup } from '../../../../../../core/forms/form-group';
import { AppFormNumberControl } from '../../../../../../core/forms/number-control';
import { AppFormRow } from '../../../../../../core/forms/form-row';
import { AppFormSelectControl } from '../../../../../../core/forms/select-control';
import { Sexes } from '../../shared/character/sex';
import { Races } from '../../shared/character/race';
import { Aligments } from '../../shared/character/alignment';
import { Beliefs } from '../../shared/character/belief';
import { Languages } from '../../shared/character/language';

declare var $: any;

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.css']
})
export class CharacterEditorComponent implements OnInit, AfterViewInit {

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
    const raceControl = new AppFormSelectControl('', null, null, {
      id: 'race',
      label: '种族',
      placeholder: '请选择种族...',
      value: this.character.race,
      options: Races
    });
    const alignmentControl = new AppFormSelectControl('', null, null, {
      id: 'alignment',
      label: '阵营',
      placeholder: '请选择阵营...',
      value: this.character.alignment,
      options: Aligments
    });
    const beliefControl = new AppFormSelectControl('', null, null, {
      id: 'belief',
      label: '信仰',
      placeholder: '请选择信仰...',
      value: this.character.belief,
      options: Beliefs
    });
    const languageControl = new AppFormSelectControl('', null, null, {
      id: 'language',
      label: '语言',
      placeholder: '请选择语言...',
      value: this.character.languages,
      options: Languages,
      isMultiple: true
    });
    // const professionControl = new AppFormSelectControl('', null, null, {
    //   id: 'profession',
    //   label: '职业',
    //   placeholder: '请选择职业...',
    //   value: this.character.professions,
    //   options: Professions,
    //   isMultiple: true,
    //   isDisabled: true
    // });
    this.characterForm.rows = [
      new AppFormRow('row1', 3, [nameControl, sexControl, ageControl]),
      new AppFormRow('row2', 3, [raceControl, alignmentControl, beliefControl]),
      new AppFormRow('row3', 1, [languageControl])
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
  }

  ngAfterViewInit(): void {
    $('.ui.dropdown').dropdown({
      allowAdditions: true
    });

    $('.accordion').accordion();
  }

}
