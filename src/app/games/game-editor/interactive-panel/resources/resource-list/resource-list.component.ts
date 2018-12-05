import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResourcesService } from '../resources.service';
import { Resource } from '../shared/resource';
import { ResourceCollection } from '../shared/resource-collection';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';

@Component({
  selector: 'app-game-editor-interactive-panel-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  @Input() resourceCollection: ResourceCollection = new ResourceCollection();
  @ViewChild(CharacterDialogComponent) characterDialog;

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
    this.characterDialog.showDialog(resource);
  }

}
