import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { equals } from "./equals-validator/equals.validator";

@Component({
    selector: 'mediasoft-lesson-three',
    templateUrl: 'lesson-three.component.html'
})
export class LessonThreeComponent implements OnInit {

    public passwordVisible: boolean = false;
    public passwordRepeatVisible: boolean = false;
    public user: any = {};

    public registrationForm: FormGroup;
    public username: FormControl;
    public password: FormControl;
    public passwordRepeat: FormControl;

    constructor(formBuilder: FormBuilder) {

        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
            Validators.pattern(/^[a-zA-Z]+$/),
        ]);

        this.password = new FormControl('', Validators.required);
        this.passwordRepeat = new FormControl('', equals(this.password));

        this.registrationForm = formBuilder.group({
            username: this.username,
            passwords: formBuilder.group({
                password: this.password,
                passwordRepeat: this.passwordRepeat
            })
        });

    }

    ngOnInit() { }

    public submit() {

    }

    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }
    togglePasswordRepeatVisibility() {
        this.passwordRepeatVisible = !this.passwordRepeatVisible;
    }
}