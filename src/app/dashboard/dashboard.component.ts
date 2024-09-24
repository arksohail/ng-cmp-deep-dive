import { Component } from '@angular/core';
import { ServerStatusComponent } from "./server-status/server-status.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";
import { DashboardItem } from '../interface/dashboard-item';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent, NgComponentOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  serverItem?: {
    title: "Server Status",
    img: "status.png",
    imgAlt: "Symbol Signal",
    component: ServerStatusComponent
  };

  dashboardItems: any[] = [
    {
      title: "Server Status",
      img: "status.png",
      imgAlt: "Symbol Signal",
      component: ServerStatusComponent
    },
    {
      title: "Traffic",
      img: 'globe.png',
      imgAlt: "A Globe",
      component: TrafficComponent
    },
    {
      title: "Tickets",
      img: 'list.png',
      imgAlt: "A List of Items",
      component: TicketsComponent
    }
  ];

}
