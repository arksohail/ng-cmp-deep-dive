import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, OnInit, ViewEncapsulation } from '@angular/core';

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
    class: 'control',
    '(click)': 'onClick()' // Recommended by Angular Team
  }
})
export class ControlComponent implements AfterContentInit, OnInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log("CLICKED")
  // }

  // private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  // private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(()=> {
      console.log("AFTER RENDER")
    });

    afterNextRender(()=> {
      console.log("AFTER NEXT RENDER")
    })
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("AFTER CONTENT INIT", this.control);
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ON INIT", this.control);
    
  }

  title = input.required<string>();
  id = input.required<string>();

  onClick() {
    console.log("CLICKED");
    // console.log(this.el);
    // console.log(this.control());
  }
}
