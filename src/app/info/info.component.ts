import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  private checked: boolean = false;
  private favoriteSeason: string;

  private seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  private selectedValue: string;

  private foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }
}
