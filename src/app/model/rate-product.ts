import {Orders} from './orders';
import {Product} from './product';
import {Rate} from './rate';

export class RateProduct {
  private  id : number;

  private  orders :Orders;

  private  product :Product;

  private  rate :Rate;


  constructor(id: number, orders: Orders, product: Product, rate: Rate) {
    this.id = id;
    this.orders = orders;
    this.product = product;
    this.rate = rate;
  }
}
