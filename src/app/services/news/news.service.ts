import { Injectable } from '@angular/core';
import { HttpService } from '../shared/httpservice/http.service';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BaseUrlNews: string = 'RecordNews/';
  CountNews: Number = 4;
  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  formNewsModel = this.fb.group({
    header: ['', [Validators.required, Validators.maxLength(100)]],
    shortDescription: ['', [Validators.required, Validators.maxLength(120)]],
    body: ['', [Validators.required]],
    imageURL: [''],
    dateTime: [Date.UTC]
  });

  createNews() {
    let Boby = {
      header: this.formNewsModel.value.header,
      shortDescription: this.formNewsModel.value.shortDescription,
      body: this.formNewsModel.value.body,
      imageURL: this.formNewsModel.value.imageURL,
      dateTime: this.formNewsModel.value.dateTime,
    }
    return this.httpService.httpPost(this.BaseUrlNews + "record", Boby);
  }
  deletNews(id: any) {
    return this.httpService.httpDelete(this.BaseUrlNews + 'record/' + `${id}`);
  }
  getFullNews(id: any) {
    return this.httpService.httpGet(this.BaseUrlNews + 'record/' + `${id}`);
  }
  getNews() {
    return this.httpService.httpGet(this.BaseUrlNews + 'records');
  }
  getSomeNews() {
    return this.httpService.httpGet(this.BaseUrlNews + 'records/' + this.CountNews);
  }
}
