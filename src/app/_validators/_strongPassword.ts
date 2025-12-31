import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPasswordCheck(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control?.value;
    if (!password) return null;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const hasLength = password.length >= 8;
    const valid = hasUppercase && hasLowerCase && hasSpecialChar && hasLength;
    return valid
      ? null
      : { strongPasswordCheck: { hasUppercase, hasLowerCase, hasSpecialChar, hasLength } };
  };
}
