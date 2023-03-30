import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable({

  providedIn:'root'
})

export class AuthAdminGuard implements CanActivate
{
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    return true;
  }

}
