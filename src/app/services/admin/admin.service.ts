import { Injectable } from '@angular/core';
import { UserProfileService } from '../user/user-profile.service';
import { IUser } from '../../models/user';

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
