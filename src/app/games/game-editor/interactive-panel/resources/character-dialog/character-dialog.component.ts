import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '../shared/character';
import { CharacterEditorComponent } from './character-editor/character-editor.component';

@Component({
  selector: 'app-game-editor-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {
  @ViewChild(CharacterEditorComponent) characterEditor;
  showMode: 'info' | 'edit' = 'info';
  character: Character = new Character();

  // @Output() showDialog: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  showDialog(character: Character): void {
    eval('$(\'.ui.modal\')\n' +
      '  .modal(\'show\')\n' +
      ';');
    this.character = character;
  }

  changeMode(mode: 'info' | 'edit') {
    this.showMode = mode;
  }

  saveChanges(): void {
    this.changeMode('info');
    this.characterEditor.saveChanges();
  }

}
