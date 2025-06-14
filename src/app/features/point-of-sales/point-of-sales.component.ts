import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { OrderComponent } from './order/order.component';
import { MenuService } from '../../services/menu.service';
import { Tag } from '../../models/tag.model';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'b-point-of-sales',
  imports: [HeaderComponent, OrderComponent, CategoryComponent],
  templateUrl: './point-of-sales.component.html',
  styleUrl: './point-of-sales.component.scss',
})
export class PointOfSalesComponent {
  private menuServices = inject(MenuService);

  menuItems = this.menuServices.loadedMenuItems;
  menuTags = this.menuServices.loadedMenuTags;
  isLoading = signal<boolean>(true);

  ngOnInit() {
    this.menuServices.loadMenuItems().subscribe();
    this.menuServices.loadMenuTags().subscribe();
  }

  categories = computed(() => {
    if (
      this.menuItems() &&
      this.menuItems()!.length > 0 &&
      this.menuTags() &&
      this.menuTags()!.length > 0
    ) {
      const categoryData = this.menuTags()?.map((tag) => {
        let count = this.menuItems()?.filter((item) =>
          item.tags.includes(tag)
        ).length;
        return { name: tag, count };
      });
      categoryData?.unshift({
        name: 'All Items',
        count: this.menuItems()?.length,
      });
      return categoryData as Tag[];
    }
    return;
  });
}
