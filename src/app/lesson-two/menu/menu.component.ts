import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from "../shared/menu-item.model";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { TooltipComponent } from "../tooltip/tooltip.component";

@Component({
    selector: 'mediasoft-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

    @ViewChild('tooltip1') public tooltip1: TooltipComponent;
    @ViewChild('tooltip2') public tooltip2: TooltipComponent;

    private items = [];

    public menu: MenuItem[] = <MenuItem[]>[
        <MenuItem>{link: 'lesson1', text: 'Lesson 1'},
        <MenuItem>{link: 'lesson2', text: 'Lesson 2'},
        <MenuItem>{
            text: 'Mediasoft',
            children: [
                <MenuItem>{link: 'mediasoft/engineering', text: 'WEB Engineering'},
                <MenuItem>{link: 'mediasoft/education', text: 'Education'},
                <MenuItem>{link: 'mediasoft/fun', text: 'Fun'},
            ]
        },
        <MenuItem>{
            text: 'Peoples',
            children: [
                <MenuItem>{link: 'mediasoft/rodjer200586', text: 'Алексей Синдюков'},
                <MenuItem>{link: 'mediasoft/kluev', text: 'Андрей Клюев'},
            ]
        },
    ];

    constructor() { }

    ngOnInit() {
    }

    public registerItem(item: MenuItemComponent) {
        this.items.push(item);
    }

    public toggle(target: MenuItemComponent) {
        if (target.collapsed === false) {
            target.collapsed = true;
            return;
        }

        for (let item of this.items) {
            if (target === item || item.collapsed === true) {
                continue;
            }
            item.collapsed = true;
        }
        target.collapsed = false;
    }
}