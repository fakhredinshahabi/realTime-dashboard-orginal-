import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Httpservice } from '../_services/httpService';
import { Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class UserValidator {
  constructor(private http: Httpservice) {}
  checkRealTimeUser(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const user = control.value;
      if (!user) return of(null);

      return this.http.checkUser(user).pipe(
        map((user: any) => {
          return user.exists ? { userExists: true } : null;
        }),
      );
    };
  }
}
