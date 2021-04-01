import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrlAuth: string = 'Authorization';

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  form = this.fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  //vavidators for confirm password
  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true }
  }

  register() {
    const body = {
      userName: this.form.value.userName,
      email: this.form.value.email,
      password: this.form.value.password
    }
    return this.httpService.httpPost(this.BaseUrlAuth + '/register', body);
  }

  login(formData) {
    return this.httpService.httpPost(this.BaseUrlAuth + '/login', formData);
  }
}
