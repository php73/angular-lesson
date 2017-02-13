import { NgModule } from '@angular/core';

import { LessonTwoComponent } from './lesson-two.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild([
            {
                path: 'lesson2',
                component: LessonTwoComponent
            }
        ]),
    ],
    declarations: [
        LessonTwoComponent,
        MenuComponent,
    ],
    exports: [
        MenuComponent
    ],
    providers: [
    ],
})
export class LessonTwoModule {
}
