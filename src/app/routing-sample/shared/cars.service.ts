import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";

@Injectable()
export class CarsService {

    constructor(private http: Http) { }

    public list() {
        return new Promise((resolve, reject) => {
            this.http.get('/api/v1/cars.json').toPromise()
                .then((response: Response) => {
                    setTimeout(function () {
                        resolve(response.json())
                    }, 5000)
                })
                .catch(reject)
        });
    }

    public view(id) {
        return this.http.get('/api/v1/cars/'+id+'.json').toPromise()
            .then((response: Response) => {
                return response.json();
            })
    }
}