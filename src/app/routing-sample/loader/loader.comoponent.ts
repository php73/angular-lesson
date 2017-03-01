import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
    selector: 'mediasoft-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {

    private subscription: Subscription;

    public visible = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.subscription = this.router.events.subscribe(
            (event: NavigationStart | NavigationEnd | NavigationCancel | NavigationError | RoutesRecognized) => {
                if (event instanceof NavigationStart) {
                    this.visible = true;
                }  else if(event instanceof NavigationEnd) {
                    this.visible = false;
                } else if(event instanceof NavigationCancel) {
                    this.visible = false;
                } else if(event instanceof NavigationError) {
                    this.visible = false;
                }
            }
        )
    }

}