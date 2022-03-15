import {CartDetail} from './cart-detail';
import {User} from './user';

export class OrderPMs{
  cartDetails:CartDetail[];
  user:User;

  constructor(cartDetails: CartDetail[], user: User) {
    this.cartDetails = cartDetails;
    this.user = user;
  }
}
