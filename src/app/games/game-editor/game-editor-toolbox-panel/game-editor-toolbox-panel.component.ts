import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-editor-toolbox-panel',
  templateUrl: './game-editor-toolbox-panel.component.html',
  styleUrls: ['./game-editor-toolbox-panel.component.css']
})
export class GameEditorToolboxPanelComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    eval('$(\'.ui.dropdown\').dropdown({on: \'hover\'\n});');
  }


}
