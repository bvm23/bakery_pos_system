import { Component, input } from '@angular/core';
import { type Tag } from '../../../models/tag.model';
import { CategoryItemComponent } from './category-item/category-item.component';

@Component({
  selector: 'b-category',
  imports: [CategoryItemComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categories = input<Tag[]>();
}
