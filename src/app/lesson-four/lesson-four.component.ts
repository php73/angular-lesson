import {Component, OnInit} from '@angular/core';
import { ToastService } from "./shared/toast.service";
import { Toast } from "./shared/toast.model";
import { ToastPosition } from "./shared/toast-position.model";

@Component({
    selector: 'mediasoft-lesson-four',
    templateUrl: 'lesson-four.component.html',
    styleUrls: ['./lesson-four.component.css']
})
export class LessonFourComponent implements OnInit {

    public toast = {
        text: 'Hello world!',
        title: 'Title',
        type: 'default',
        timeout: 5000,
    };

    constructor(private toastService: ToastService) {
    }

    ngOnInit() {
    }

    public showToast(v, h) {
        this.toastService.toast(<Toast>{
            text: this.toast.text,
            title: this.toast.title,
            type: this.toast.type,
            timeout: this.toast.timeout,
            position: {
                horizontal: h,
                vertical: v,
            }
        });
    }

}