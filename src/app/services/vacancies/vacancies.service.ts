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
    salary:[Number],
    Description: [''],
    Requirements: [''],
    WorkExperience: [''],
    DateTime: [Date.UTC,[Validators.required]]
  });

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
