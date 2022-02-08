import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private authService : AuthService,
    private http :HttpClient) { }

getHttpOptions(){
let httpOptions = {};
let userData: any = '';
userData = this.authService.retrieveUserDetails();
if(userData!=null){
let token = JSON.parse(userData).token;
console.log("token:" + token);
httpOptions =  {
headers: new HttpHeaders({
'content-type': 'application/json',
'Authorization': 'Bearer ' + token
})
}
}
return httpOptions;
}
  addOrder(order:any):Observable<Orders>{
    console.log('in service');
    console.log(order);
    return this.http.post<Orders>('http://localhost:8083/order/add',order,this.getHttpOptions());
  }
  viewOrder(orderId :any): Observable<Orders>{
    return this.http.get<Orders>('http://localhost:8083/order/orderId/'+orderId,this.getHttpOptions());
  }
}
