import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from "ng2-bootstrap";
import { LessonOneModule } from "./lesson-one/lesson-one.module";
import { RouterModule, ExtraOptions as RouterOptions, PreloadAllModules, NoPreloading } from "@angular/router";
import { LessonTwoModule } from "./lesson-two/lesson-two.module";
import { LessonThreeModule } from "./lesson-three/lesson-three.module";
import { LessonFourModule } from "./lesson-four/lesson-four.module";
import { RoutingSampleModule } from "./routing-sample/routing-sample.module";
import { routerErrorHandler } from "./shared/router.error-handler";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule.forRoot(),
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/lesson1', pathMatch: 'full' },
            ],
            <RouterOptions>{
                useHash: false, // html5mode режим ссылок без использования хэша
                enableTracing: true, // выводит в консоль внутренние сообщения роутера
                initialNavigation: true, // включает или отключает первичную навигацию при загрузке приложения
                errorHandler: routerErrorHandler,
                preloadingStrategy: NoPreloading, // Стратегия загрузки модулей
            }
        ),
        LessonOneModule,
        LessonTwoModule,
        LessonThreeModule,
        LessonFourModule,
        RoutingSampleModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
