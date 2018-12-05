import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameEditorComponent } from './game-editor/game-editor.component';
import { ToolboxPanelComponent } from './game-editor/map/toolbox-panel/toolbox-panel.component';
import { InteractivePanelComponent } from './game-editor/interactive-panel/interactive-panel.component';
import { MapComponent } from './game-editor/map/map.component';
import { ResourcesComponent } from './game-editor/interactive-panel/resources/resources.component';
import { ResourceListComponent } from './game-editor/interactive-panel/resources/resource-list/resource-list.component';
import { CoreModule } from '../core/core.module';
import { CharacterDialogComponent } from './game-editor/interactive-panel/resources/character-dialog/character-dialog.component';
import { CharacterEditorComponent } from './game-editor/interactive-panel/resources/character-dialog/character-editor/character-editor.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    GameEditorComponent,
    ToolboxPanelComponent,
    InteractivePanelComponent,
    MapComponent,
    ResourcesComponent,
    ResourceListComponent,
    CharacterDialogComponent,
    CharacterEditorComponent],
  exports: [GameEditorComponent]
})

export class GamesModule {
}
