import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  BaseUrlUserProfile: string = 'UserProfile';
  constructor(private httpService: HttpService) { }

  getUserProfile() {
    const token = localStorage.getItem('token');
    const tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.httpService.httpGet(this.BaseUrlUserProfile, tokenHeader);
  }
}
