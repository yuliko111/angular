import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Погода';
  temperatureAir = 14;
  temperatureWater = 20;
  imgSrc = 'assets/cloudy.png';

  constructor() { }

  ngOnInit() {
  }

}
