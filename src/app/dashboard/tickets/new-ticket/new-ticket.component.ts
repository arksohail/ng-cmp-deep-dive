import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { ControlComponent } from "../../../shared/component/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
