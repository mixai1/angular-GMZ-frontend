import { Component, OnInit } from '@angular/core';
import { VacanciesService } from '../../../services/vacancies/vacancies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-vacancies',
  templateUrl: './create-vacancies.component.html',
  styleUrls: ['./create-vacancies.component.css']
})
export class CreateVacanciesComponent implements OnInit {

  constructor(public service: VacanciesService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  onSubmit(){
    this.service.createVacancies().subscribe(
      res=>{
        this.toastr.success("Вакансия успешно добавлена","Успешное добавление");
        this.service.formVacanciesModel.reset();
      },
      err=>{
        this.toastr.error("Что пошло не так","Ошибка валидации");
      }
    )
  }
}
