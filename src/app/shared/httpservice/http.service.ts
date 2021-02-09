import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl: string = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  httpPost(url: string, body) {
    return this.http.post(this.BaseUrl + `${url}`, body);
  }
  httpGet(url: string, heders = null) {
    return this.http.get(this.BaseUrl + `${url}`, { headers: heders });
  }
}
