import {Category} from './category';
import {User} from './user';
import {Promotion} from './promotion';

export class Product {
  id : number;
 name : string;
   description : string;
  price : number;
  quantity: number;
   quantity_sale: number; // so luong sp da ban
  quantity_max: number;// so luong toi da co the ban
   quantity_min: number;// so luong toi thieu co the ban
   price_sale: number;// gia sau khuyen mai
   cover_photo: string;

    category : Category;

  user : User;

    promotion : Promotion;


  constructor(id: number, name: string, description: string, price: number, quantity: number, quantity_sale: number, quantity_max: number, quantity_min: number, price_sale: number, cover_photo: string, category: Category, user: User, promotion: Promotion) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.quantity_sale = quantity_sale;
    this.quantity_max = quantity_max;
    this.quantity_min = quantity_min;
    this.price_sale = price_sale;
    this.cover_photo = cover_photo;
    this.category = category;
    this.user = user;
    this.promotion = promotion;
  }


}
