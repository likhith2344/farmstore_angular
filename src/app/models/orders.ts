import { Item } from "./item";
import { Supplier } from "./supplier";

export class Orders {
    
    orderId:number = 0;
    quantity:number = 0;
    price:number = 0;
    orderDate:Date = new Date();
    items:Array<Item> = [];
    supplier:Supplier = new Supplier();
    deleted:number = 0;

    constructor() {}

}
