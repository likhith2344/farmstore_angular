import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { ItemComponent } from './components/item/item.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { CredentialComponent } from './components/credential/credential.component';
import { LoginComponent } from './components/credential/login/login.component';
import { CartComponent } from './components/orders/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ViewSupplierOrderComponent } from './components/orders/view-supplier-order/view-supplier-order.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SupplierComponent,
    ItemComponent,
    FarmerComponent,
    CredentialComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    ViewSupplierOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
