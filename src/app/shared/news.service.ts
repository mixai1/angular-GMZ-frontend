import { Injectable } from '@angular/core';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BaseUrlNews: string = 'RecordNews';
  constructor(private httpService: HttpService) { }

  getNews(){
    return this.httpService.httpGet(this.BaseUrlNews +'/getAll');
  }
}
