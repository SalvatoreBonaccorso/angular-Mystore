import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // 'providedIn' defines in which module to create the injector 
  providedIn: 'root'
})

export class CartService {
  // array containing the products added to the cart
  items = [];

  constructor(
    // inject HttpClient
    private http: HttpClient
  ) { }

    // define the methods for the operations to execute on the cart

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}