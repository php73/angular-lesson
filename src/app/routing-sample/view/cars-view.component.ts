import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mediasoft-cars-view',
    templateUrl: './cars-view.component.html'
})
export class CarsViewComponent implements OnInit {
    public car: any[] = [];

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.subscribe((data: any) => {
            this.car = data.car;
        });
    }
}