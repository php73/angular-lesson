import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LessonOneComponent } from "./lesson-one/lesson-one.component";
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LessonOneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
