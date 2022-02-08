import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { UserType } from 'src/app/models/userType';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-view-supplier-order',
  templateUrl: './view-supplier-order.component.html',
  styleUrls: ['./view-supplier-order.component.css']
})
export class ViewSupplierOrderComponent implements OnInit {
 orderData = {
    orderId:0,
    quantity: 0,
    price: 0,
    orderDate: new Date(),
    // items: Item[],
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
  constructor(private activeRouter : ActivatedRoute,
              private orderService : OrdersService) { }

  ngOnInit(): void {
    let orderId : any = this.activeRouter.snapshot.paramMap.get('orderId');
    this.orderService.viewOrder(orderId).subscribe((response)=>{
      console.log(response);
      // this.orderData=response;
    })
  }

}
