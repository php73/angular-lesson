import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'mediasoft-tooltip',
    exportAs: 'mediasoft-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['./tooltip.component.css'],
    host: {
        '[style.position]': '"relative"',
    },
})
export class TooltipComponent implements OnInit {

    private isHidden = true;

    public ngOnInit() {};

    public show() {
        this.isHidden = false;
    }

    public hide()
    {
        this.isHidden = true;
    }
}