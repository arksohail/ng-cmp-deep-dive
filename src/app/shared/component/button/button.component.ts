import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  template: `
    <span>{{data().title}}</span>
    <span class="icon">{{data().icon}}</span>
  `,
  styles: ``
})
export class ButtonComponent {
  data = input.required<{ title: string, icon: string }>();
}
