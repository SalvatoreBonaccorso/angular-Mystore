import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define the 'items' property to store the products in the cart
  items;

  constructor(
    // Inject the cart service
    private cartService: CartService
  ) {
    
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}