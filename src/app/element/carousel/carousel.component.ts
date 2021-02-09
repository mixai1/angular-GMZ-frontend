import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  
  images = [944, 1011, 18,98].map((n) => `https://picsum.photos/id/${n}/1500/500`);
  ngOnInit(): void {
  }

}
