import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsViewComponent } from "./view/cars-view.component";
import { CarsService } from "./shared/cars.service";
import { CarsResolver, CarResolver } from "./shared/resolvers";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild([
            {
                path: 'cars',
                component: CarsListComponent,
                resolve: {
                    cars: CarsResolver
                }
            },
            {
                path: 'cars/:id',
                component: CarsViewComponent,
                resolve: {
                    car: CarResolver
                }
            }
        ]),
    ],
    declarations: [
        CarsListComponent,
        CarsViewComponent,
    ],
    exports: [
    ],
    providers: [
        CarsService,
        CarsResolver,
        CarResolver,
    ],
})
export class RoutingSampleModule {
}
