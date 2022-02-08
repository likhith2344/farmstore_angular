import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Farmer } from 'src/app/models/farmer';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ItemData={
    itemName: '',
    itemQuantity:0,
    itemPrice:0,
    itemCategory: Category.GRAINS,
    
    verified: false
  }
  items: Item[] = [];
 
  constructor(private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    // private viewCustomerService: ViewCustomerBookService,
    private router: Router) { }

  ngOnInit(): void {
    this.items = [...this.cartService.getItems()];

  }

  clearCart(itemId: number) {
    this.items = this.cartService.clearCart(itemId);

  }

  placeOrder() {
    this.router.navigate(['/order']);
  }
  back() {
    // this.router.navigate(['list-customer-book']);
  }

}
