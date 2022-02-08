import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/orders/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  {path : "supplier",
  component : SupplierComponent},
  {path : "cart",
  component : CartComponent},
  {
    path : "order",
  component : OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
