import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  BaseURl: string = "Vacancies/vacancies";
  constructor(private http: HttpService, private fb: FormBuilder) { }

  formVacanciesModel = this.fb.group({
    name:['',[Validators.required, Validators.maxLength(120)]],
    salary:[0],
    description: [''],
    requirements: [''],
    workExperience: [''],
    dateTime: [Date.UTC]
  });

  createVacancies(){
    let body ={
      name: this.formVacanciesModel.value.name,
      salary: this.formVacanciesModel.value.salary,
      description: this.formVacanciesModel.value.description,
      requirements: this.formVacanciesModel.value.requirements,
      workExperience: this.formVacanciesModel.value.workExperience,
      dateTime: this.formVacanciesModel.value.dateTime
    }
    return this.http.httpPost(this.BaseURl,body);
  }

  deleteVacancies(id: any) {
    return this.http.httpDelete(this.BaseURl + `${id}`);
  }
  getAllVacancies() {
    return this.http.httpGet(this.BaseURl);
  }
  getDetailVacancies(id: any) {
    return this.http.httpGet(this.BaseURl + `${id}`);
  }

}
