import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content />
    </span>
    <ng-content select=".icon" />
  `,
  styles: ``
})
export class ButtonComponent {}
