import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameEditorComponent } from './game-editor/game-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameEditorComponent],
  exports: [GameEditorComponent]
})

export class GamesModule {
}
