import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from "../shared/toast.service";
import { Subscription } from "rxjs";
import { Toast } from "../shared/toast.model";
import { ToastPosition } from "../shared/toast-position.model";

@Component({
    selector: 'mediasoft-toast-container',
    templateUrl: './toast-container.component.html',
    styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    private toasts: any = {
        left: {
            top: [],
            middle: [],
            bottom: [],
        },
        center: {
            top: [],
            middle: [],
            bottom: [],
        },
        right: {
            top: [],
            middle: [],
            bottom: [],
        }
    };

    public containers: ToastPosition[] = [
        {horizontal: 'left', vertical: 'top'},
        {horizontal: 'left', vertical: 'middle'},
        {horizontal: 'left', vertical: 'bottom'},
        {horizontal: 'center', vertical: 'top'},
        {horizontal: 'center', vertical: 'middle'},
        {horizontal: 'center', vertical: 'bottom'},
        {horizontal: 'right', vertical: 'top'},
        {horizontal: 'right', vertical: 'middle'},
        {horizontal: 'right', vertical: 'bottom'},
    ];

    constructor(private toastService: ToastService) { }

    public ngOnInit() : void {
        this.subscription = this.toastService.toasts.subscribe((toast: Toast) => {
            this.showToast(toast)
        })
    }

    public ngOnDestroy() : void  {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private showToast(toast: Toast) {
        this.getTargetContainer(toast).push(toast);
        if (toast.timeout) {
            setTimeout(() => {
                this.removeToast(toast)
            }, toast.timeout)
        }
    }

    public removeToast(toast: Toast) {
        let container = this.getTargetContainer(toast);
        let index = container.indexOf(toast);
        if (index > -1) {
            container.splice(index, 1);
        }
    }

    private getTargetContainer(toast: Toast) : Toast[] {
        return this.toasts[toast.position.horizontal][toast.position.vertical];
    }
}