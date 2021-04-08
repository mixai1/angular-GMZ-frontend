import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ElementModule } from '../element/element.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [ElementModule,CommonModule]
})
export class HomeModule { }
