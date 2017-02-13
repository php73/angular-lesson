import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "../shared/menu-item.model";
import { MenuComponent } from "../menu/menu.component";

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

    constructor(protected menu: MenuComponent) { }

    ngOnInit() {
        this.menu.registerItem(this)
    }


    onClick($event) {
       if (!this.item.children) {
           return;
       }

        $event.preventDefault();
        this.menu.toggle(this);
    }
}