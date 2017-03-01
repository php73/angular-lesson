import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mediasoft-car-overview',
    templateUrl: 'car-overview.component.html'
})
export class CarOverviewComponent implements OnInit {
    public car: any;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.parent.data.subscribe((data: any) => {
            this.car = data.car;
        });
    }
}