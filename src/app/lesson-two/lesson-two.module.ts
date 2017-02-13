import { NgModule } from '@angular/core';

import { LessonTwoComponent } from './lesson-two.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { StopwatchComponent } from "./stopwatch/stopwatch.component";
import { TudaSudaComponent } from "./tuda-suda/tuda-suda.component";

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
        MenuItemComponent,
        TooltipComponent,
        StopwatchComponent,
        TudaSudaComponent,
    ],
    exports: [
        MenuComponent
    ],
    providers: [
    ],
})
export class LessonTwoModule {
}
