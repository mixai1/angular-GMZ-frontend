import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag: boolean = false;
  constructor(private roter: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.flag = true;
    }
  }
  onLogin(){
    this.roter.navigateByUrl('user/login');
  }
  UserProfile(){
    this.roter.navigateByUrl('userProf');
  }
}
