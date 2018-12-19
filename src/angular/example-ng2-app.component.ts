import {Component, OnInit, NgZone, Inject} from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
    selector: 'example-ng2-app',
    templateUrl: './example-ng2-app.component.html',
    styleUrls: ['./example-ng2-app.component.scss']
})
export class ExampleNg2App implements OnInit{

    constructor(private counter: CounterService) {
    }

    ngOnInit(): void {
        console.log(this.counter.counter);
    }
}
