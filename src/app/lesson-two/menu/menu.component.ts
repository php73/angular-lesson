import { Component, OnInit } from '@angular/core';
import { MenuItem } from "../shared/menu-item.model";

@Component({
    selector: 'mediasoft-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {
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

    ngOnInit() { }
}