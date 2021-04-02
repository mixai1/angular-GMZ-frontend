import { Injectable } from '@angular/core';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  BaseUrlNews: string = 'RecordNews/';
  CountNews: Number = 4;
  constructor(private httpService: HttpService) { }

  getFullNews(id: any) {
    return this.httpService.httpGet(this.BaseUrlNews + 'findRecord/' + `${id}`);
  }
  getNews() {
    return this.httpService.httpGet(this.BaseUrlNews + 'allRecords');
  }
  getSomeNews() {
    return this.httpService.httpGet(this.BaseUrlNews + 'someRecords/' + this.CountNews);
  }
}
