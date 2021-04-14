import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from '../news-detail/news-detail.component';
import { ElementModule } from '../element/element.module';

@NgModule({
  declarations: [NewsComponent,NewsDetailComponent],
  imports: [CommonModule, ElementModule]
})
export class NewsModule { }
