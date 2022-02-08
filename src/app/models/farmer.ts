import { Credentials } from "./credential";
import { Item } from "./item";

export class Farmer {

    farmerId:number = 0;
    farmerName:string = '';
    farmerMobile:string = '';
    farmerLocation:string = '';
    credential:Credentials = new Credentials();
    
    constructor() {}

}
