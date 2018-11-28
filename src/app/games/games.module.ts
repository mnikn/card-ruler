import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameEditorComponent } from './game-editor/game-editor.component';
import { GameEditorToolboxPanelComponent } from './game-editor/game-editor-toolbox-panel/game-editor-toolbox-panel.component';
import { GameEditorChatPanelComponent } from './game-editor/game-editor-chat-panel/game-editor-chat-panel.component';
import { GameEditorMapComponent } from './game-editor/game-editor-map/game-editor-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameEditorComponent,
    GameEditorToolboxPanelComponent,
    GameEditorChatPanelComponent,
    GameEditorMapComponent],
  exports: [GameEditorComponent]
})

export class GamesModule {
}
