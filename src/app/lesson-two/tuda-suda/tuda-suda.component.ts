import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mediasoft-tuda-suda',
    templateUrl: 'tuda-suda.component.html'
})
export class TudaSudaComponent implements OnInit {
    @Input('value') private _value: number = 0;
    @Output() private valueChange = new EventEmitter();

    get value(): number {
        return this._value;
    }
    set value(value: number) {
        this._value = value;
        this.valueChange.emit(this.value);
    }

    constructor() { }

    ngOnInit() { }

}