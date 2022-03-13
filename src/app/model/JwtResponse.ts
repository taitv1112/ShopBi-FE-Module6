import {Cart} from './cart';
import {CartDetail} from './cart-detail';

export class JwtResponse {
  private _name: string;
  private _token: string;
  private _avatar: string;
  private _roles: string[];
  private _cart:Cart;
  private _cartDetails:CartDetail[];


  constructor(name: string, token: string, avatar: string, roles: string[], cart: Cart, cartDetails: CartDetail[]) {
    this._name = name;
    this._token = token;
    this._avatar = avatar;
    this._roles = roles;
    this._cart = cart;
    this._cartDetails = cartDetails;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }

  get cart(): Cart {
    return this._cart;
  }

  set cart(value: Cart) {
    this._cart = value;
  }

  get cartDetails(): CartDetail[] {
    return this._cartDetails;
  }

  set cartDetails(value: CartDetail[]) {
    this._cartDetails = value;
  }
}
