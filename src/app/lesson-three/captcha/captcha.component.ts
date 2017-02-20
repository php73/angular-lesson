import { Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
    selector: 'mediasoft-captcha[ngModel],mediasoft-captcha[formControl],mediasoft-captcha[formControlName]',
    templateUrl: 'captcha.component.html',
})
export class CaptchaComponent implements ControlValueAccessor {
    public random: number;
    private _value: any;

    public disabled: boolean = false;
    public onChangeListener: any = () => {};
    public onTouchListener: any = () => {};

    constructor(control: NgControl) {
        this.random = Math.random();
        control.valueAccessor = this;
    }

    public touch() {
        this.onTouchListener();
    }

    get value() : any {
        return this._value;
    }
    set value(value: any) {
        this._value = value;
        this.onChangeListener(value);
    }

    /**
     * Write a new value to the element.
     */
    writeValue(value: any): void {
        this._value = value;
    }

    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: any): void {
        this.onChangeListener = fn || (() => {});
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any): void {
        this.onTouchListener = fn || (() => {});
    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}