import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin/admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private service: AdminService, private toastr: ToastrService,
    private router: Router) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    if (await this.service.isAdminCheck()) {
      this.toastr.success("Панель Администратора", "Wellcome");
      return true;
    }
    //TODO: rerutn false! 
      //this.router.navigateByUrl('/home')
      return true;
  }
}
