import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './admin-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewsComponent } from './create-news/create-news.component';
import { RouterModule } from '@angular/router';
import { ViewAllNewsComponent } from './view-all-news/view-all-news.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CreateVacanciesComponent } from './create-vacancies/create-vacancies.component';


@NgModule({
  declarations: [AdminPanelComponent, CreateNewsComponent, ViewAllNewsComponent, CreateVacanciesComponent],
  exports: [AdminPanelComponent],
  imports:
  [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class AdminPanelModule { }
