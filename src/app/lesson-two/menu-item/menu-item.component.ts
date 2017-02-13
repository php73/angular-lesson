import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "../shared/menu-item.model";

@Component({
    selector: '[mediasoft-menu-item]',
    templateUrl: 'menu-item.component.html',
    host: {
        '[class.dropdown]': 'item.children',
        '[class.open]': '!collapsed',
    }
})
export class MenuItemComponent implements OnInit {
    public collapsed = true;

    @Input('mediasoft-menu-item') public item: MenuItem;

    constructor() { }

    ngOnInit() { }

    toggle($event, item) {
        if (!item.children) {
            return;
        }
        $event.preventDefault();

        this.collapsed = !this.collapsed;
    }
}