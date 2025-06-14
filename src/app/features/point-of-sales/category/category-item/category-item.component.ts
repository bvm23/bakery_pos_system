import { Component, input } from '@angular/core';
import { type Tag } from '../../../../models/tag.model';
import { UtensilsCrossed } from 'lucide-angular';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'b-category-item',
  imports: [IconComponent],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
  readonly tagIcon = UtensilsCrossed;

  category = input<Tag>();
}
