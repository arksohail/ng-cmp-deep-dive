import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  template: `
    <p>
      <label [for]="id()">{{title()}}</label>
       <ng-content select="input, textarea" />
    </p>
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
  `
})
export class ControlComponent {
  title = input.required<string>();
  id = input.required<string>();

}
