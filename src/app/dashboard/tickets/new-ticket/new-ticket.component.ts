import { Component } from '@angular/core';
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

  onSubmit(titleInput: string, requestInput: string) {
    console.log("SUBMITTED!", titleInput, requestInput)
  }

}
