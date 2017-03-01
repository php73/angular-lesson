import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { PersonsService } from "../shared/persons.service";

@Component({
    selector: 'mediasoft-ng-for-demo',
    templateUrl: 'ng-for-demo.component.html'
})
export class NgForDemoComponent implements OnInit {

    public personName = '';
    public personBackground = 'black';
    public persons = [
        {name: 'Alice', background: 'black', birthday: "01.01.1985"},
        {name: 'Bob', background: 'black', birthday: "2001-10-23"}
    ];

    constructor(private personsService: PersonsService) {
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
        this.personsService.list().then((persons: any) => {
            this.persons = persons
        })
    }
}