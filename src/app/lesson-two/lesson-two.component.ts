import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mediasoft-lesson-two',
    templateUrl: 'lesson-two.component.html'
})
export class LessonTwoComponent implements OnInit {


    public tudaSudaValue = 0;

    constructor() {
    }

    ngOnInit() {
    }

    setTudaSuda($event) {
        this.tudaSudaValue = $event;
    }
}