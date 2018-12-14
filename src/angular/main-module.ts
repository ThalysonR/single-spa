import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ExampleNg2App} from './example-ng2-app.component';
import {enableProdMode} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CounterService} from "./counter.service";

try {
    enableProdMode();
} catch (err) {
    console.info('EnableProdMode already set')
}

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [ExampleNg2App],
    bootstrap: [ExampleNg2App],
    providers: [CounterService]
})
export default class MainModule {
}
