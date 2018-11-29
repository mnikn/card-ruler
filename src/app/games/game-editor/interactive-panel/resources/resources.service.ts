import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { ResourceCollection } from './resource-collection';
import { Resource } from './resource';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private resourceCollections: ResourceCollection[] = [];

  constructor() {
  }

  getResourceCollections(): Observable<ResourceCollection[]> {
    return new Observable<ResourceCollection[]>((observer) => {
      const collection = new ResourceCollection();
      collection.id = 1;
      collection.name = '角色';
      collection.type = 'player';
      const resource = new Resource();
      resource.id = 1;
      resource.name = '角色1';
      collection.data.push(resource);

      this.resourceCollections = [collection];
      observer.next([collection]);
      observer.complete();
    });
  }

  createNewResource(collectionId: number, resource: Resource): Observable<ResourceCollection> {
    return new Observable<ResourceCollection>((observer) => {
      const collection = this.resourceCollections.find(e => e.id === collectionId);
      collection.data.push(resource);
      observer.next(collection);
      observer.complete();
    });
  }

  deleteResource(collectionId: number, resourceId: number): Observable<ResourceCollection> {
    return new Observable<ResourceCollection>((observer) => {
      const collection = this.resourceCollections.find(e => e.id === collectionId);
      _.remove(collection.data, {id: resourceId});
      observer.next(collection);
      observer.complete();
    });
  }
}
