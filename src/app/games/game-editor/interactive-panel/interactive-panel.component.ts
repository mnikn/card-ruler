import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-editor-interactive-panel',
  templateUrl: './interactive-panel.component.html',
  styleUrls: ['./interactive-panel.component.css']
})
export class InteractivePanelComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    eval('$(\'.menu .item\')\n' +
      '  .tab()\n' +
      ';');
  }

}
