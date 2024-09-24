import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button>
      <span>
        {{data().title}}
      </span>
      <span class="icon">
        {{data().icon}}
      </span>
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  data = input.required<{title: string, icon: string}>();
}
