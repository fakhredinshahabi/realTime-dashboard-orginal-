import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Httpservice } from '../_services/httpService';
import { Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class EmailValidator {
  constructor(private http: Httpservice) {}
  checkRealTimeEmail(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      if (!email) return of(null);

      return this.http.checkEmail(email).pipe(
        map((eml: any) => {
          return eml.exists ? { emailExists: true } : null;
        }),
      );
    };
  }
}
