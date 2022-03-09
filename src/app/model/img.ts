import {Product} from './product';

export class Img {
  private  id! : number;
  private  link! : string;

  private  product : Product;


  constructor(id: number, link: string, product: Product) {
    this.id = id;
    this.link = link;
    this.product = product;
  }
}
