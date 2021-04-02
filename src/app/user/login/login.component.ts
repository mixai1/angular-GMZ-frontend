import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  formModel = {
    userName: '',
    password: ''
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success("Вы успешно вошли","Успешная аутентификация")
        this.router.navigateByUrl('/');
      },
      err => {
        if (err.status == 400) {
          this.toastr.error('Неверный логин или пороль','Неудачная аутентификация');
        }
      }
    )
  }
}
