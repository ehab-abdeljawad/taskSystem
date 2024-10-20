import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MustMatchDirective,
      multi: true
    }
  ]
})
export class MustMatchDirective implements Validator {
  @Input('appMustMatch') compareControlName: string ='';

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.parent?.get(this.compareControlName);

    if (controlToCompare && control.value !== controlToCompare.value) {
      return { mustMatch: true }; // Validation error if values do not match
    }

    return null; // No error if values match
  }
}
