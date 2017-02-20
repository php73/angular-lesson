import { Directive, Input, OnInit, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from "@angular/forms";
import { equals } from "./equals.validator";

@Directive({
    selector: '[mediasoft-equals-validator][ngModel],[mediasoft-equals-validator][formControl],[mediasoft-equals-validator][formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualsValidatorDirective), multi: true }
    ]
})
export class EqualsValidatorDirective implements Validator, OnInit {
    @Input('mediasoft-equals-validator') masterValue: any;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = equals(this.masterValue);
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.validator(control);
    }

}