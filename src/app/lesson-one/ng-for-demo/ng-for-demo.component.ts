import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'mediasoft-ng-for-demo',
    templateUrl: 'ng-for-demo.component.html'
})
export class NgForDemoComponent implements OnInit {

    public personName = '';
    public personBackground = 'white';
    public persons = [
        {name: 'Alice', background: 'white', birthday: "01.01.1985"},
        {name: 'Bob', background: 'white', birthday: "2001-10-23"}
    ];

    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    public addPerson() {
        this.persons.push({name: this.personName, background: this.personBackground, birthday: null});
        this.personName = '';
    }

    public removePerson(person) {
        this.persons.splice(this.persons.indexOf(person), 1)
    }

    public loadPersons()
    {
        this.http.get('/api/v1/persons.json').toPromise()
            .then((response: Response) => {
                this.persons = response.json();
            })
    }
}