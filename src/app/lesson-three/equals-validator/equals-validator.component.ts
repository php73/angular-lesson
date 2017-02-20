import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[mediasoft-equals-validator][ngModel],[mediasoft-equals-validator][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsValidatorDirective), multi: true }
    ]
})
export class EqualsValidatorDirective implements Validator {

    @Input('mediasoft-equals-validator') masterValue: any;

    constructor() { }

    validate(control: AbstractControl) : { [key: string]: any } {
        if (control.value !== this.masterValue) {
            return {equals: 'The values do not match.'}
        }

        return null;
    }
}