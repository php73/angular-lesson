import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mediasoft-ng-for-demo',
    templateUrl: 'ng-for-demo.component.html'
})
export class NgForDemoComponent implements OnInit {

    public personName = '';
    public personBackground = 'white';
    public persons = [
        {name: 'Alice', background: 'white'},
        {name: 'Bob', background: 'white'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    public addPerson() {
        this.persons.push({name: this.personName, background: this.personBackground});
        this.personName = '';
    }

    public removePerson(person) {
        this.persons.splice(this.persons.indexOf(person), 1)
    }

}