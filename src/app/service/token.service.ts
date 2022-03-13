import {Injectable} from '@angular/core';
import {CartDetail} from '../model/cart-detail';
import {Cart} from '../model/cart';

const NAME_KEY = 'Name_Key';
const TOKEN_KEY = 'Token_Key';
const ROLE_KEY = 'Role_Key';
const AVATAR_KEY = 'Avatar_Key';
const LIST_CART_DETAIL = 'CartDetails_Key';
const CART = 'Cart_Key';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  cartDetails:CartDetail[];
  cart:Cart;
  constructor() {
  }

  public setNameKey(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  public getNameKey(): string {
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setListCardDetail(cartDetails: any) {
    window.sessionStorage.removeItem(LIST_CART_DETAIL);
    window.sessionStorage.setItem(LIST_CART_DETAIL, cartDetails);
  }

  public getListCardDetail(): any {
    return window.sessionStorage.getItem(LIST_CART_DETAIL);
  }
  public setCart(cart: Cart) {
    window.sessionStorage.removeItem(CART);
    // @ts-ignore
    window.sessionStorage.setItem(CART, cart);
  }

  public getCard(): any {
    return window.sessionStorage.getItem(CART);
  }


  public setTokenKey(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public setAvatarKey(avatar: string) {
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY, avatar);
    console.log(window.sessionStorage.getItem(AVATAR_KEY));
  }

  public getAvatarKey(): string {
    return window.sessionStorage.getItem(AVATAR_KEY);
  }

  public getTokenKey(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setRoleKey(roles: string[]) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(roles));
  }

  public getRoleKey(): string[] {
    const roles = [];
    console.log('ROLE_KEY ---> ', sessionStorage.getItem(ROLE_KEY));
    console.log('ROLE KEY SAU KHI PARSE ==> ', JSON.parse(sessionStorage.getItem(ROLE_KEY)));
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        console.log('ROLE SAU KHI FOR EARCH ---> ', role);
        roles.push(role.authority);
      });
    }
    return roles;
  }
}
