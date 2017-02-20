import { AbstractControl, ValidatorFn } from '@angular/forms';

export const equals = (masterControl: AbstractControl): ValidatorFn => {
    let subscribe: boolean = false;

    return (control: AbstractControl): {[key: string]: boolean} => {
        if (!subscribe) {
            subscribe = true;
            masterControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }

        return masterControl.value === control.value ? null : {equalTo: true};
    };
};
