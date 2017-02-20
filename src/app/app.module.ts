import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from "ng2-bootstrap";
import { LessonOneModule } from "./lesson-one/lesson-one.module";
import { RouterModule } from "@angular/router";
import { LessonTwoModule } from "./lesson-two/lesson-two.module";
import { LessonThreeModule } from "./lesson-three/lesson-three.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: '/lesson1', pathMatch: 'full' },
        ],
        {
            useHash: false
        }),
        LessonOneModule,
        LessonTwoModule,
        LessonThreeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
