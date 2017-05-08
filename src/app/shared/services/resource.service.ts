import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from '../models/resource.model';
import { ResourceLine } from '../models/resource-line.model';

@Injectable()
export class ResourceService {

  private sampleResources: Resource[] = [
    new Resource(1, 'name1', 'desc1', [new ResourceLine(1, 'lineName1', 'lineDesc1')], new Date()),
    new Resource(2, 'name2', 'desc2', [new ResourceLine(2, 'lineName2', 'lineDesc2')], new Date()),
    new Resource(3, 'name3', 'desc3', [new ResourceLine(3, 'lineName3', 'lineDesc3'), new ResourceLine(4, 'lineName4', 'lineDesc4')], new Date()),
  ]

  constructor() { }

  public getResources(): Observable<any> {
    return Observable.create((subscriber) => {
      setTimeout(() => {
        subscriber.next(this.sampleResources);
        subscriber.complete();
      }, 3000);
    });
  }
}
