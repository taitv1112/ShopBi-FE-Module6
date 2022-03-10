import Order = jasmine.Order;
import {Product} from './product';

export class OrderDetail {
    id! : number;

   orders : Order;

   product :Product;
    quantity: number;

  constructor(id: number, orders: jasmine.Order, product: Product, quantity: number) {
    this.id = id;
    this.orders = orders;
    this.product = product;
    this.quantity = quantity;
  }
}
