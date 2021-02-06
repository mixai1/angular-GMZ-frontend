import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public sevrice: UserService, private toastr: ToastrService) { }

// toastr not working,хз почему
// TODO: fix toastr

  ngOnInit(): void {
    this.sevrice.form.reset();
  }

  onSubmit() {
    this.sevrice.register().subscribe(
      (res: any) => {
        if (res.succeded) {
          this.sevrice.form.reset();
          
          this.toastr.success('New user created', 'Registration successful.');
          alert('New user created');
        }
      },
      (err: any) => {
        console.log(err);
        err.error.forEach(element => {
          console.log(element);
          switch (element.code) {
            case "DuplicateUserName":
              this.toastr.error('User name is already taken', 'Registration failde.');
              alert('User name is already taken');
              break;
            default:
              this.toastr.error(`${element.description}`, 'Registration failde.');
              alert(`${element.description}`);
              break;
          }
        }
        )
      }
    )
  }
}
