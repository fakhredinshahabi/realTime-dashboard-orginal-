import { ValidatorFn,AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
export const checkRePassword = (controls:AbstractControl): ValidationErrors | null =>{
const paswsword=controls.get('password');
const Repassword=controls.get('repassword');
const isMatched =(paswsword?.value===Repassword?.value)
if(isMatched) {
return null
}else{
    return {missMatch:true}
}
    
    
}