import {Cart} from './cart';
import {Product} from './product';

export class CartDetail {
   id! : number;
   cart : Cart;
  product : Product;
  quantity! : number;


  constructor(id: number, cart: Cart, product: Product, quantity: number) {
    this.id = id;
    this.cart = cart;
    this.product = product;
    this.quantity = quantity;
  }

}
