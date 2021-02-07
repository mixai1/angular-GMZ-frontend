import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl: string = 'http://localhost:5000/api/Authorization/';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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
    console.log(body);
    return this.http.post(this.BaseUrl + 'register', body);
  }

  login(formData) {
    return this.http.post(this.BaseUrl + 'login', formData);
  }
}
