import Order = jasmine.Order;
import {Product} from './product';

export class OrderDetail {
  private  id! : number;

  private  orders : Order;

  private  product :Product;
  private  quantity: number;

  constructor(id: number, orders: jasmine.Order, product: Product, quantity: number) {
    this.id = id;
    this.orders = orders;
    this.product = product;
    this.quantity = quantity;
  }
}
