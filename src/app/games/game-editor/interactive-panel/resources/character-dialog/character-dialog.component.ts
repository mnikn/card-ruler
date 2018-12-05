import { Component, OnInit } from '@angular/core';
import { Character } from '../shared/character';

@Component({
  selector: 'app-game-editor-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {

  public character: Character = new Character();

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

}
