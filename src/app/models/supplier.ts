import { Credentials } from "./credential";
import { Orders } from "./orders";

export class Supplier {

    supplierId:number = 0;
    supplierName:string = '';
    supplierMobile:string = '';
    supplierLocation:string = '';
    orders:Array<Orders> = [];
    credential:Credentials = new Credentials();

    constructor() {}

}
