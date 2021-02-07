import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public sevrice: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.sevrice.form.reset();
  }

  onSubmit() {
    this.sevrice.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log(res);
          this.sevrice.form.reset();
          this.toastr.success('New user created', 'Registration successful.');
        }
        else {
          res.error.forEach(element => {
            console.log(element);
            switch (element.code) {
              case "DuplicateUserName":
                this.toastr.error('User name is already taken', 'Registration failde.');
                break;
              default:
                this.toastr.error(`${element.description}`, 'Registration failde.');
                break;
            }
          }
          )
        }
      }
    )
  }
}
