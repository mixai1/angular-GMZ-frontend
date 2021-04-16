import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { VacansiesComponent } from './vacansies/vacansies.component';

@NgModule({
  declarations: [HistoryComponent, VacansiesComponent],
  imports: [CommonModule],
})
export class HistoryModule { }
