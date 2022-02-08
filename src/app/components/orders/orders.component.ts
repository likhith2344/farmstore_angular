import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Orders } from 'src/app/models/orders';
import { UserType } from 'src/app/models/userType';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { SupplierComponent } from '../supplier/supplier.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  addOrder:Orders =
{
  orderId:0,
  quantity: 0,
  price: 0,
  orderDate: new Date(),
  items: [],
  supplier:{ supplierId: 0,
    supplierName:  '',
    supplierMobile: '',
    supplierLocation: '',
    orders: [],
    "credential": {
      "userName": '',
      "password": '',
      "userType": UserType.SUPPLIER
  }
},
  deleted:  0
  }

  constructor(private supplierService : SupplierService,
              private authService :AuthService,
              private cartService:CartService,
              private orderService:OrdersService) { }
  // userData: any='';
  ngOnInit(): void {
    
let userData = this.authService.retrieveUserDetails();
if(userData!=null){
  this.addOrder.supplier=JSON.parse(userData);
}
console.log(this.addOrder.supplier);
this.addOrder.items = [...this.cartService.getItems()];
this.addOrder.quantity = this.addOrder.items.length;
for (let i = 0; i < this.addOrder.items.length; i++) {
  this.addOrder.price += +this.addOrder.items[i].itemPrice;
}
console.log(this.addOrder);
this.orderService.addOrder(this.addOrder).subscribe((response)=>{
  console.log(response);
  this.addOrder.items = [];
  this.addOrder = response;
  this.cartService.emptyItems();
},
(error) => {
  console.log(error); 
 });

  }

}
