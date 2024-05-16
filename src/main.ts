import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ObservableComponent } from './app/observable/observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Namaste from {{ name }}!</h1>
    <h5>Let's Learn Observable</h5>

    <app-observable></app-observable>
    
  `,
  imports:[ObservableComponent],
})
export class App {
  name = 'Aditya';
}

bootstrapApplication(App);
