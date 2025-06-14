import { inject, Injectable, signal } from '@angular/core';
import { type Item } from '../models/item.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http = inject(HttpClient);

  private menuItems = signal<Item[] | undefined>(undefined);
  private menuTags = signal<string[] | undefined>(undefined);

  loadedMenuItems = this.menuItems.asReadonly();
  loadedMenuTags = this.menuTags.asReadonly();

  loadMenuItems() {
    return this.getItems(
      'https://dummyjson.com/recipes',
      'Loading Menu Items failed!'
    ).pipe(
      tap({
        next: (items) => {
          this.menuItems.set(items);
        },
      })
    );
  }

  loadMenuTags() {
    return this.getItemsTags(
      'https://dummyjson.com/recipes/tags',
      'Loading Menu Tags Failed!'
    ).pipe(
      tap({
        next: (tags) => {
          this.menuTags.set(tags);
        },
      })
    );
  }

  private getItems(url: string, errorMessage: string) {
    return this.http
      .get<{ recipes: Item[]; limit: number; skip: number; total: number }>(url)
      .pipe(
        map((response) => response.recipes),
        catchError((err) => throwError(() => new Error(errorMessage)))
      );
  }

  private getItemsTags(url: string, errorMessage: string) {
    return this.http
      .get<string[]>(url)
      .pipe(catchError((err) => throwError(() => new Error(errorMessage))));
  }
}
