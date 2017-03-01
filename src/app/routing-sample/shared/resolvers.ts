import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarsService } from "./cars.service";

@Injectable()
export class CarsResolver implements Resolve<any> {

    constructor(private carsService: CarsService) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return this.carsService.list();
    }
}

@Injectable()
export class CarResolver implements Resolve<any> {

    constructor(private carsService: CarsService, private router: Router) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return this.carsService.view(route.params['id']).catch((error) => {
            alert(error);
            this.router.navigate(['/cars']);
        });
    }
}