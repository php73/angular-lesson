import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mediasoft-cars-list',
    templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit {

    public cars: any[] = [];

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: any) => {
            this.cars = data.cars;
        });
    }

}