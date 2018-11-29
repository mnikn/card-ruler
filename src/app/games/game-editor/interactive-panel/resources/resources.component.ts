import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-game-editor-interactive-panel-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resourceCollection: any[] = [];

  constructor(private dataService: ResourcesService) {
  }

  ngOnInit() {
    this.dataService.getResourceCollection().subscribe((resources) => {
      this.resourceCollection = resources;
    });
  }

}
