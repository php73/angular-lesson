import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";

@Injectable()
export class PersonsService {

    constructor(private http: Http) { }

    public list() : Promise<any> {
        return this.http.get('/api/v1/persons.json').toPromise()
            .then((response: Response) => {
                return response.json();
            })
    }
}