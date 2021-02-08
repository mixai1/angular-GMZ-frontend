import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../shared/user-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userProfile;
  constructor(private service: UserProfileService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      (res: any)=>{
        this.userProfile = res;
        console.log(res);
      },
      (err =>{
        console.log(err);
        
      })
    )
  }

}
