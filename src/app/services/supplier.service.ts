import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService { 
  date: Date = new Date();
  constructor(private http: HttpClient,
    private authService: AuthService) { } 
    supplierName:string =''; 
    getHttpOptions(){ 
      let httpOptions = {};
       let userData: any = '';
        userData = this.authService.retrieveUserDetails(); 
        if(userData!=null){ 
          let userName = JSON.parse(userData).credential.userName;
           console.log(userData); 
           console.log(this.date);
           console.log("token:" + userName); 
           httpOptions = {
              headers: new HttpHeaders({
                 'content-type': 'application/json',
                  'Authorization': 'Bearer ' + userName
                 }) 
                } 
              }
              console.log(httpOptions);
               return httpOptions;
               }
                viewDetails(supplierId:number):Observable<Supplier>{
                   let url = "http://localhost:8083/supplier/viewDetails"; 
                   return this.http.get<Supplier>(url+"/"+supplierId, this.getHttpOptions()); } }
