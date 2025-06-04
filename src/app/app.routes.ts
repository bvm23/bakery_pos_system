import { Routes } from '@angular/router';
import { PointOfSalesComponent } from './features/point-of-sales/point-of-sales.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pointofsales',
    pathMatch: 'full',
  },
  { path: 'pointofsales', component: PointOfSalesComponent },
];
