import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './resources.service';
import { ResourceCollection } from './resource-collection';

@Component({
  selector: 'app-game-editor-interactive-panel-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resourceCollections: ResourceCollection[] = [];

  constructor(private dataService: ResourcesService) {
  }

  ngOnInit() {
    this.dataService.getResourceCollections().subscribe((resources) => {
      this.resourceCollections = resources;
    });
  }

}
