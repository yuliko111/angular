import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  title = 'Инфо об отеле';
  countFollowers = 2850;
  countFollowing = 675;
  imgSrc = 'assets/res.jpg';

  constructor() { }

  ngOnInit() {
  }

}
