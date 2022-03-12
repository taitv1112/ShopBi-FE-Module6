import {Cart} from './cart';
import {CartDetail} from './cart-detail';

export class JwtResponse {
  name: string;
  token: string;
  avatar: string;
  roles: string[];
  cart:Cart;
  cartDetailList:CartDetail[];

  constructor(name: string, token: string, avatar: string, roles: string[]) {

    this.name = name;
    this.token = token;
    this.avatar = avatar;
    this.roles = roles;
  }
}
