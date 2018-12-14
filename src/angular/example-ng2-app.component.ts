import {Component, OnInit, NgZone, Inject} from '@angular/core';
import {CounterService} from "./counter.service";

@Component({
    selector: 'example-ng2-app',
    template: `
    <div style="border: 5px dashed red; display: flex; flex-flow: column wrap; align-items: center; box-sizing: border-box; padding: 50px; margin-bottom: 20px;">
      <h1>Angular</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" height="100" width="100"/>
    </div>
  `,
})
export class ExampleNg2App implements OnInit{

    constructor(@Inject(CounterService) private counter: CounterService) {
    }

    ngOnInit(): void {
        console.log(this.counter.counter);
    }
}
