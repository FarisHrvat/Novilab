import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Laboratory Notebook</h1>
    <p>{{ description }}</p>
  `
})
export class AppComponent {
  description = 'This is a simple laboratory notebook application built using Angular.';
}
