import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {from, map} from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return from(auth.isAuthenticated$).pipe(
    map(isAuthenticated=>{
      console.log('magz: is authenticated? ', isAuthenticated);
      if(isAuthenticated){
        return true;
      }

      router.navigate(['/login']);
      return false;
    })
  )

  // if (auth.isAuthenticated()) {
  //   return true;
  // }
  //
  // router.navigate(['/login']);
  // return false;
};
