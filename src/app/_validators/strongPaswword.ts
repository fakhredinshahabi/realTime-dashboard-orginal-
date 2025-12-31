import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strongPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*()]/.test(value);
    const hasMinLength = value.length >= 6;

    const valid = hasLower && hasUpper && hasNumber && hasSpecial && hasMinLength;

    return valid ? null : {
      strongPassword: { hasLower, hasUpper, hasNumber, hasSpecial, hasMinLength }
    };
  };
}


