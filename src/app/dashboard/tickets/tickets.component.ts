import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(data: { title: string, text: string }) {
    this.tickets.push({
      id: new Date().getTime().toString(),
      title: data.title,
      request: data.text,
      status: 'open'
    });
    console.log(this.tickets)
  }

  onCloseTicket(id: string) {
    this.tickets.forEach((ticket) => {
      if(ticket.id === id) ticket.status = 'close';
    });
  }
}
