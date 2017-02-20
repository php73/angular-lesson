import { NgModule } from '@angular/core';

import { LessonThreeComponent } from './lesson-three.component';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { EqualsValidatorDirective } from "./equals-validator/equals.directive";
import { CaptchaComponent } from "./captcha/captcha.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild([
            {
                path: 'lesson3',
                component: LessonThreeComponent
            }
        ]),
    ],
    exports: [],
    declarations: [
        LessonThreeComponent,
        EqualsValidatorDirective,
        CaptchaComponent,
    ],
    providers: [],
})
export class LessonThreeModule { }
