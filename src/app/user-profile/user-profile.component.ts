import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private roter:Router) { }

  ngOnInit(): void {
  }
  onlogout(){
    localStorage.removeItem('token');
    this.roter.navigateByUrl('/home');
  }

}
