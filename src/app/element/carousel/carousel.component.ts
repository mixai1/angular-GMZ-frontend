import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  
  images = [1, 4, 5,98].map((n) => `../../../assets/images/carousel/slc0${n}.png`);
  ngOnInit(): void {
  }

}
