import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  BaseUrl: string = 'http://localhost:5000/api/UserProfile/';
  constructor(private http: HttpClient) { }

  getUserProfile() {
    const token = localStorage.getItem('token');
    const tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token });
    return this.http.get(this.BaseUrl + 'userProfile', { headers: tokenHeader });
  }
}
