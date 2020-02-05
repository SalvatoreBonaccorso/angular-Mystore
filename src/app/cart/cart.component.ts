import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define the 'items' property to store the products in the cart
  items;
  // Define the 'checkoutForm' property to store the form model
  checkoutForm;

  constructor(
    // Inject the cart service
    private cartService: CartService,
    // Inject the form builder
    private formBuilder: FormBuilder,
  ) {
     this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  
   }

       // method to process the form
    onSubmit(customerData) {
      console.warn("You order has been submitted",customerData);

      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }

  ngOnInit() {
   
  }

}