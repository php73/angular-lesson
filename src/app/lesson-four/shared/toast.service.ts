import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

import { Toast } from "./toast.model";
import { ToastPosition } from "./toast-position.model";

@Injectable()
export class ToastService {

    private subject: Subject<Toast> = new Subject<Toast>();

    get toasts() : Observable<Toast> {
        return this.subject.asObservable();
    }

    public toast(toast: Toast) {
        this.subject.next(toast);
    }

    // Алиасы

    private defaultPosition: ToastPosition = <ToastPosition>{
        horizontal: 'right',
        vertical: 'bottom'
    };

    public message(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'default',
            text: text,
            position: position,
        });
    }

    public success(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'success',
            text: text,
            position: position || this.defaultPosition,
        });
    }

    public danger(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'danger',
            text: text,
            position: position || this.defaultPosition,
        });
    }

    public warning(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'warning',
            text: text,
            position: position || this.defaultPosition,
        });
    }

    public info(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'info',
            text: text,
            position: position || this.defaultPosition,
        });
    }

    public primary(text: string, position?: ToastPosition) {
        return this.toast(<Toast>{
            type: 'primary',
            text: text,
            position: position || this.defaultPosition,
        });
    }

    public setDefaultPosition(position: ToastPosition) {
        this.defaultPosition = position;
    }
}