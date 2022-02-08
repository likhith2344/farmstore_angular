import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items :Item[]=[]
addToCart(ItemData: Item) {
  this.items.push(ItemData);

}

getItems() {
  return this.items;
}

emptyItems(){
  this.items.splice(0,this.items.length);
}
clearCart(itemId:number) {
  console.log(itemId);
  
 const a=  this.items.findIndex(b => b.itemId==itemId);
if(a!=-1){

 this.items.splice(a,1);
 return this.getItems();
}
else{
return this.getItems();
  }
}
}
