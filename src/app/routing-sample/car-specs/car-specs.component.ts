import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mediasoft-car-specs',
    templateUrl: 'car-specs.component.html'
})
export class CarSpecsComponent implements OnInit {
    public car: any[] = [];

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.parent.data.subscribe((data: any) => {
            this.car = data.car;
        });
    }
}