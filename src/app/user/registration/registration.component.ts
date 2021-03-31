import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public sevrice: UserService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.sevrice.form.reset();
  }

  onSubmit() {
    this.sevrice.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.sevrice.form.reset();
          this.toastr.success('Новый ползвотель создан', 'Успешная регистрация.');
          this.router.navigateByUrl('user/login');
        }
        // TODO: fix response errors ? 
        else{
          res.errors.forEach(element => {
            switch (element.code){
              case "DuplicateUserName":
                this.toastr.error("fekfekek","Error");
              break;
              default:
                this.toastr.error(`${element.description}`,"feeef");
                break;
            }
          });
        }
        (err:any)=>{
          err.errors.forEach(element => {
            switch (element.code){
              case "DuplicateUserName":
                this.toastr.error("fekfekek","Error");
              break;
              default:
                this.toastr.error(`${element.description}`,"feeef");
                break;
            }
          });
        }
      }
    )
  }
}
