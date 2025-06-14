import { Component } from '@angular/core';
import { BadgePercent, Pencil, ReceiptText } from 'lucide-angular';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'b-order',
  imports: [IconComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  readonly billIcon = ReceiptText;
  readonly editIcon = Pencil;
  readonly offerIcon = BadgePercent;
}
