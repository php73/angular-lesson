import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes, Route } from "@angular/router";
import { CarsListComponent } from "./cars-list/cars-list.component";
import { CarsViewComponent } from "./view/cars-view.component";
import { CarsService } from "./shared/cars.service";
import { CarsResolver, CarResolver } from "./shared/resolvers";
import { CarOverviewComponent } from "./car-overview/car-overview.component";
import { CarSpecsComponent } from "./car-specs/car-specs.component";
import { CanActivateCar, CanActivateChildCar, CanDeactivateCar } from "./shared/guards";
import { LoaderComponent } from "./loader/loader.comoponent";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(<Routes>[
            <Route>{
                path: 'cars',
                component: CarsListComponent,
                resolve: {
                    cars: CarsResolver
                }
            },
            <Route>{
                path: 'cars/:id',
                component: CarsViewComponent,
                resolve: {
                    car: CarResolver
                },
                canActivate: [CanActivateCar],
                canActivateChild: [CanActivateChildCar],
                canDeactivate: [CanDeactivateCar],
                // canLoad: [CanLoadCar]
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: CarOverviewComponent },
                    { path: 'specs', component: CarSpecsComponent }
                ]
            }
        ]),
    ],
    declarations: [
        CarsListComponent,
        CarsViewComponent,
        CarOverviewComponent,
        CarSpecsComponent,
        LoaderComponent,
    ],
    exports: [
        LoaderComponent,
    ],
    providers: [
        CarsService,
        CarsResolver,
        CarResolver,
        CanActivateCar,
        CanActivateChildCar,
        CanDeactivateCar,
    ],
})
export class RoutingSampleModule {
}
