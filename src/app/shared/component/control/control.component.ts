import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
    <label [for]="id()">{{title()}}</label>
    <ng-content select="input, textarea" />
  `,
  styles: `
    .control label {
      display: block;
      font-size: 0.8rem;
      font-weight: bold;
      margin-bottom: 0.15rem;
      color: #4f4b53;
    }

    .control input,
    .control textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font: inherit;
      font-size: 0.9rem;
      color: #4f4b53;
    }
  `,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  title = input.required<string>();
  id = input.required<string>();
}
