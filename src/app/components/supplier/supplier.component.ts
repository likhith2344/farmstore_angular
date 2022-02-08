import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { UserType } from 'src/app/models/userType';
import { AuthService } from 'src/app/services/auth.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit { 
  // supplierId:number=1;
  //  supplierData:Supplier={
  //    "supplierId": 1,
  //    "supplierName": 'XYZ',
  //    "supplierMobile": '8382373222',
  //    "supplierLocation": 'BAN',
  //    "credential": {
  //      "userName": 'xyz',
  //      "password": '123',
  //      "userType": UserType.SUPPLIER
  //    },
  //    orders: []
  //  }; 
        constructor(private supplierService: SupplierService, private authService:AuthService) {

         } 
         ngOnInit(): void { } 
        //  viewDetails() { 
        //    this.authService.storeUserDetails(JSON.stringify(this.supplierData));
        //     this.supplierService.viewDetails(this.supplierId).subscribe((response) => {
        //        alert("done" + JSON.stringify(response));
        //        },
        //         (error) => {
        //            console.log(error); 
        //           });
        //          } 
               }
