import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameEditorComponent } from './game-editor/game-editor.component';
import { ToolboxPanelComponent } from './game-editor/map/toolbox-panel/toolbox-panel.component';
import { InteractivePanelComponent } from './game-editor/interactive-panel/interactive-panel.component';
import { MapComponent } from './game-editor/map/map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GameEditorComponent,
    ToolboxPanelComponent,
    InteractivePanelComponent,
    MapComponent],
  exports: [GameEditorComponent]
})

export class GamesModule {
}
