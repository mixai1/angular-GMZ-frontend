import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable } from '@angular/core';
import { IUser } from '../model/user';
import { UserProfileService } from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private service: UserProfileService) { }

  isAdminCheck(): Promise<boolean> {
    if (localStorage.getItem('token') != null) {
      return new Promise<boolean>((resole, reject) => {
        this.service.getUserProfile().subscribe(
          (res: IUser) => {
            res.listRoles.forEach(ele => {
              if (ele == 'Admin') {
                resole(true);
              }
              resole(false);
            })
          }
        );
      });
    }
    return new Promise<boolean>(resolve=>resolve(false));
  }
}
