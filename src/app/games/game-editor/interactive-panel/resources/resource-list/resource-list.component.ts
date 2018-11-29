import { Component, Input, OnInit } from '@angular/core';
import { ResourcesService } from '../resources.service';

@Component({
  selector: 'app-game-editor-interactive-panel-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  @Input() resources: any = {data: []};

  constructor(public dataService: ResourcesService) {
  }

  ngOnInit() {
  }

  createResource(): void {
    const index = this.resources.data.length + 1;
    const newItem = {
      id: index,
      name: this.resources.name + index
    };
    this.dataService.createNewResource(this.resources.id, newItem).subscribe();
  }

  deleteResource(resourceId: number): void {
    this.dataService.deleteResource(this.resources.id, resourceId).subscribe();
  }

}
