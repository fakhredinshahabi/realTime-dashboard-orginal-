import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const conecktChek= (controls:AbstractControl):ValidationErrors|null =>{
const emaail=controls.get('email')?.valid;
const phoneNaumber =controls.get('phonNumber')?.valid;
const checked=emaail||phoneNaumber
if (checked) {
    return null
}else
{return {notValid:true}}
}
