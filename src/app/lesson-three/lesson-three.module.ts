import { NgModule } from '@angular/core';

import { LessonThreeComponent } from './lesson-three.component';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

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
    declarations: [LessonThreeComponent],
    providers: [],
})
export class LessonThreeModule { }
