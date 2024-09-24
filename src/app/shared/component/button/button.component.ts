import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]. a[appButton]',
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content />
    </span>
    <ng-content select="icon" />
  `,
  styles: `
  button {
    display: inline-block;
    padding: 0.65rem 1.35rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    background-color: #691ebe;
    color: white;
    border: none;
  }

  button:hover {
    background-color: #551b98;
  }

  .icon {
    display: inline-block;
    margin-left: 0.5rem;
    transition: transform 0.2s ease-in-out;
  }

  button:hover .icon {
    transform: translateX(4px);
  }
  `
})
export class ButtonComponent { }
