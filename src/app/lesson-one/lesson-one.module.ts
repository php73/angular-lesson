import { NgModule } from '@angular/core';

import { LessonOneComponent } from './lesson-one.component';
import { DataBindingDemoComponent } from "./data-binding-demo/data-binding-demo.component";
import { NgForDemoComponent } from "./ng-for-demo/ng-for-demo.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        LessonOneComponent,
        DataBindingDemoComponent,
        NgForDemoComponent,
    ],
    exports: [
        LessonOneComponent
    ],
    providers: [],
})
export class LessonOneModule {
}