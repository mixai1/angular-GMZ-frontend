import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public sevrice: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sevrice.register().subscribe(res=>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

}
