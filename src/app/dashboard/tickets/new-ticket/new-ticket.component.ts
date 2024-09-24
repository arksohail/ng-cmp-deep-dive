import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { ControlComponent } from "../../../shared/component/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  onSubmit(titleInput: string, requestInput: string) {
    console.log("SUBMITTED!", titleInput, requestInput);

    this.form().nativeElement.reset();
  }

}
