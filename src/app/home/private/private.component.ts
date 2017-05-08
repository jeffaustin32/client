import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

// Services
import { ResourceService } from '../../shared/services/resource.service';

// Models
import { Resource } from '../../shared/models/resource.model';
import { ResourceLine } from '../../shared/models/resource-line.model';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate(400)
      ]),
      transition('* => void', [
        animate(400)
      ])
    ])
  ]
})

export class PrivateComponent implements OnInit {
  private resources: Resource[];
  private loadingResources: boolean = false;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getResources();
  }

  private getResources() {
    // Display loading bar
    this.loadingResources = true;
    this.resourceService.getResources().subscribe(
      (res) => {
        this.resources = res;
      },
      (err) => {
        console.log('Error getting resources');
      },
      () => {
        this.loadingResources = false;
      }
    )
  }

}
