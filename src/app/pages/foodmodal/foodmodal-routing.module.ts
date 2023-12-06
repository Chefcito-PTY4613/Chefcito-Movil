import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodmodalPage } from './foodmodal.page';

const routes: Routes = [
  {
    path: '',
    component: FoodmodalPage
  },
  {
    path: 'order',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../order/order.module').then(m => m.OrderPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodmodalPageRoutingModule { }
