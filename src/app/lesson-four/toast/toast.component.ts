import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ToastContainerComponent } from "../toast-container/toast-container.component";

@Component({
    selector: 'mediasoft-toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['./toast.component.css']
})
export class ToastComponent {

    @Input('toast') private toast;

    constructor(private container: ToastContainerComponent) {
    }

    public close() {
        this.container.removeToast(this.toast);
    }
}