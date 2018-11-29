import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  private resourceCollection: any[] = [];

  constructor() {
  }

  getResourceCollection(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      const collection = [{
        id: 1,
        name: '角色',
        type: 'player',
        data: [{
          id: 1,
          name: '角色1'
        }]
      }];
      this.resourceCollection = collection;
      observer.next(collection);
      observer.complete();
    });
  }

  createNewResource(collectionId: number, resource: any): Observable<any> {
    return new Observable<any[]>((observer) => {
      const collection = this.resourceCollection.find(e => e.id === collectionId);
      collection.data.push(resource);
      observer.next(collection);
      observer.complete();
    });
  }

  deleteResource(collectionId: number, resourceId: number): Observable<any> {
    return new Observable<any[]>((observer) => {
      const collection = this.resourceCollection.find(e => e.id === collectionId);
      _.remove(collection.data, {id: resourceId});
      observer.next(collection);
      observer.complete();
    });
  }
}
