import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../shared/user-profile.service';
import { IUser } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private roter: Router, private userProfService: UserProfileService) { }

  dataUser: IUser;
  roles: string[];
  ngOnInit(): void {
    this.userProfService.getUserProfile().subscribe(
      (res: IUser) => {
        this.dataUser = res;
        this.roles = res.listRoles;
      },
      err => {
        this.dataUser = null;
      }
    )
  }
  onlogout() {
    localStorage.removeItem('token');
    this.roter.navigateByUrl('/home');
  }

}
