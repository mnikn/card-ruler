import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-editor-map-toolbox-panel',
  templateUrl: './toolbox-panel.component.html',
  styleUrls: ['./toolbox-panel.component.css']
})
export class ToolboxPanelComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    eval('$(\'.ui.dropdown\').dropdown({on: \'hover\'\n});');
  }


}
