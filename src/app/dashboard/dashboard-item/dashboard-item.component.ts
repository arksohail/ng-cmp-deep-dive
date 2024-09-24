import { Component, Input, input } from '@angular/core';
import { DashboardItem } from '../../interface/dashboard-item';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  item = input.required<DashboardItem>()
  // @Input({required: true}) image!: {src: string, alt: string};
  // @Input({required: true}) title!: string;
}
