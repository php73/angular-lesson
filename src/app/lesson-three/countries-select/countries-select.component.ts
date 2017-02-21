import { Component, OnInit } from '@angular/core';
import {
    NgControl, ControlValueAccessor, Validator, AbstractControl, NgModel,
} from "@angular/forms";
import { Http, Response } from "@angular/http";

@Component({
    selector: 'mediasoft-countries-select[ngModel],mediasoft-countries-select[formControl],mediasoft-countries-select[formControlName]',
    templateUrl: 'countries-select.component.html',
    styleUrls: ['./countries-select.component.css']
})
export class CountriesSelectComponent implements OnInit, ControlValueAccessor, Validator {

    public disabled: boolean = false;
    public onChangeListener: any = () => {};
    public onTouchListener: any = () => {};

    public countries: {name: string}[];
    private value: any;

    constructor(private control: NgControl,
                private ngModel: NgModel,
                private http: Http) {
        control.valueAccessor = this;
    }

    ngOnInit() {
        this.load();
    }

    private load() {
        this.http.get('/api/v1/countries.json').toPromise().then((response: Response) => {
            setTimeout(() => {
                this.countries = response.json();
                this.ngModel.control.updateValueAndValidity();
            }, 10000)
        });
    }

    public select($event: Event, country: {name: any}) {
        $event.preventDefault();

        this.value = country.name;
        this.onTouchListener();
        this.onChangeListener(this.value);
    }

    validate(control: AbstractControl): {[key: string]: any} {
        return this.countries ? null : {countries: true};
    }

    /**
     * Write a new value to the element.
     */
    writeValue(value: any): void {
        this.value = value;
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