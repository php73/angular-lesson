import { forwardRef, Directive, ViewContainerRef, Injector } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS} from "@angular/forms";
import { CountriesSelectComponent } from "./countries-select.component";

@Directive({
    selector: 'mediasoft-countries-select[ngModel],mediasoft-countries-select[formControl],mediasoft-countries-select[formControlName]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => CountriesSelectValidator), multi: true }
    ]
})
export class CountriesSelectValidator implements Validator {

    constructor(private injector: Injector) {
    }


    validate(control: AbstractControl): {[key: string]: any} {
        return this.injector.get(CountriesSelectComponent).countries ? null : {countries_loading: true}
    }

}