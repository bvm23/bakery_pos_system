import { Component, input, signal } from '@angular/core';
import { type Tag } from '../../../../models/tag.model';
import { UtensilsCrossed } from 'lucide-angular';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'b-category-item',
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
  readonly tagIcon = UtensilsCrossed;

  data = input<Tag>();
  selected = signal<boolean>(false);
}
