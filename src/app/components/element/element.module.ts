import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoaderComponent, CarouselComponent],
  exports: [LoaderComponent, CarouselComponent],
  imports: [CommonModule,NgbModule]
})
export class ElementModule { }
