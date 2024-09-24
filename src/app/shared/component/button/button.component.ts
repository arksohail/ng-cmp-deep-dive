import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content>
        Click
      </ng-content>
    </span>
    <ng-content select=".icon">
      >
    </ng-content>
  `,
  styles: ``
})
export class ButtonComponent {}
