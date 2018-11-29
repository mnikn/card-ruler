import { Component, Input, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';
import { Resource } from '../resource';
import { ResourceCollection } from '../resource-collection';

@Component({
  selector: 'app-game-editor-interactive-panel-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  @Input() resourceCollection: ResourceCollection = new ResourceCollection();

  constructor(public dataService: ResourcesService) {
  }

  ngOnInit() {
  }

  createResource(): void {
    const index = this.resourceCollection.data.length + 1;
    const newItem = new Resource();
    newItem.id = index;
    newItem.name = this.resourceCollection.name + index;
    this.dataService.createNewResource(this.resourceCollection.id, newItem).subscribe();
  }

  deleteResource(resourceId: number): void {
    this.dataService.deleteResource(this.resourceCollection.id, resourceId).subscribe();
  }

  editResource(resource: Resource): void {

  }

}
