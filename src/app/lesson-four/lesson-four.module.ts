import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ToastContainerComponent } from "./toast-container/toast-container.component";
import { ToastService } from "./shared/toast.service";
import { ToastComponent } from "./toast/toast.component";
import { LessonFourComponent } from "./lesson-four.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'lesson4',
                component: LessonFourComponent
            }
        ]),
    ],
    declarations: [
        LessonFourComponent,
        ToastContainerComponent,
        ToastComponent,
    ],
    exports: [
        ToastContainerComponent
    ],
    providers: [
        ToastService
    ],
})
export class LessonFourModule {
}
