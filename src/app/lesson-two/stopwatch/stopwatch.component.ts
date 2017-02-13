import { Component, OnInit, DoCheck, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
    selector: 'mediasoft-stopwatch',
    templateUrl: 'stopwatch.component.html',
    styleUrls: ['stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, DoCheck, OnChanges, OnDestroy {
    
    public lifetime = 0;
    public interval;
    public logMessages: string[] = [];
    
    constructor() {
        this.log('constructor')
    }

    ngOnChanges(changes: SimpleChanges) {
        // Ответить, когда Angular привзявыет значения входных параметров компонента.
        // Метод принимает объект SimpleChanges который содержит текущие и предыдущие значений свойств.
        // Вызывается перед ngOnInit и каждый раз когда изменился один или несколько входных данных компонента.
        this.log('ngOnChanges');
        this.log(changes.toString());
    }

    ngOnInit() {
        // Вызывается единожды, после первого вызова ngOnChanges.
        this.log('ngOnInit');
        this.interval = setInterval(() => {
            this.lifetime += 1;
            console.log((new Date) + ': Тик-так.. Тик-так... Тик-так...')
        }, 1000);
    }

    ngDoCheck() {
        // Этот хук используятся для обнаружения изменений который Angular просмотрел
        // Код данного метода должен быть легковесным и простым, так как это хук вызывается
        // после каждого цикла обнаружения изменений вне зависимости от того менялось что-то или нет
        this.log('ngDoCheck')
    }

    ngAfterContentInit() {
        // Вызывается единожды, после обратоки внешнего контента
        this.log('ngAfterContentInit')
    }

    ngAfterContentChecked() {
        // Вызывается единожды после первого NgDoCheck, и после каждого последующего NgDoCheck
        this.log('ngAfterContentChecked')
    }

    ngAfterViewInit() {
        // Хук аналогичен ngAfterContentInit, но не для внешнего контента, а для контента собственного шаблона
        this.log('ngAfterViewInit')
    }
    ngAfterViewChecked() {
        // Хук аналогичен ngAfterContentChecked, но не для внешнего контента, а для контента собственного шаблона
        this.log('ngAfterViewChecked')
    }

    ngOnDestroy() {
        // Вызывается единожды при уничтожении компонента
        this.log('ngOnDestroy');
        clearInterval(this.interval);
    }

    public log(message) {
        let now = new Date;
        this.logMessages.push(now + ': '+message)
    }
}