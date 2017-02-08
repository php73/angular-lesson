import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mediasoft-lesson-one',
    templateUrl: 'lesson-one.component.html'
})
export class LessonOneComponent implements OnInit {

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