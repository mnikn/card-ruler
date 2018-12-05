import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameEditorComponent } from './game-editor/game-editor.component';
import { ToolboxPanelComponent } from './game-editor/map/toolbox-panel/toolbox-panel.component';
import { InteractivePanelComponent } from './game-editor/interactive-panel/interactive-panel.component';
import { MapComponent } from './game-editor/map/map.component';
import { ResourcesComponent } from './game-editor/interactive-panel/resources/resources.component';
import { ResourceListComponent } from './game-editor/interactive-panel/resources/resource-list/resource-list.component';
import { CoreModule } from '../core/core.module';
import { CharacterDialogComponent } from './game-editor/interactive-panel/resources/character-dialog/character-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    GameEditorComponent,
    ToolboxPanelComponent,
    InteractivePanelComponent,
    MapComponent,
    ResourcesComponent,
    ResourceListComponent,
    CharacterDialogComponent],
  exports: [GameEditorComponent]
})

export class GamesModule {
}
