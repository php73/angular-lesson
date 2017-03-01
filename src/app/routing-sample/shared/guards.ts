import {
    ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild, CanDeactivate
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarsViewComponent } from "../view/cars-view.component";

@Injectable()
export class CanActivateCar implements CanActivate {
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise(function (resolve, reject) {
            if (confirm('А вам есть 18?')) {
                resolve(true);
                return;
            }
            reject('Нет 18 лет');
        })
    }
}

@Injectable()
export class CanActivateChildCar implements CanActivateChild {
    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return confirm('А вам точно есть 18?')
    }
}

@Injectable()
export class CanDeactivateCar implements CanDeactivate<CarsViewComponent> {
    public canDeactivate(component: CarsViewComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return confirm('А точно всё прочитали?')
    }
}

