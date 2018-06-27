import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {
  title = 'Краткая информация';
  imgSrc = 'assets/1.jpg';
  tabs = ['Hotel', 'Fishing', 'Tours', 'Weather',];
  someObj = {
    tab1: {
      name: 'tab1',
      attr: 1,
    }, tab2: {
      name: 'tab2',
      attr: 2,
    }, tab3: {
      name: 'tab3',
      attr: 3,
    },
  };
  public myFunc(event): void {
    const value = event.target;
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
