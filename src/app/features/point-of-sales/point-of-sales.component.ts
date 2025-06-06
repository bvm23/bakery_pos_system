import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'b-point-of-sales',
  imports: [HeaderComponent, OrderComponent],
  templateUrl: './point-of-sales.component.html',
  styleUrl: './point-of-sales.component.scss',
})
export class PointOfSalesComponent {}
