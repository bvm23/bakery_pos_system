import { Component } from '@angular/core';
import {
  BadgePercent,
  LucideAngularModule,
  Pencil,
  ReceiptText,
} from 'lucide-angular';

@Component({
  selector: 'b-order',
  imports: [LucideAngularModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  readonly billIcon = ReceiptText;
  readonly editIcon = Pencil;
  readonly offerIcon = BadgePercent;
}
