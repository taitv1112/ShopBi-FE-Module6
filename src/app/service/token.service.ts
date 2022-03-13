import {Injectable} from '@angular/core';
import {CartDetail} from '../model/cart-detail';
import {Cart} from '../model/cart';
import {BehaviorSubject} from 'rxjs';

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
   private  quantityCart = new BehaviorSubject(this.getQuantityCartProduct())
  currentQuantityCart = this.quantityCart.asObservable();
  cart:Cart;
  constructor() {
  }
  public changeQuantityCart(quantityCart:number){
    this.quantityCart.next(quantityCart);
  }
  public setNameKey(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }

  public getNameKey(): string {
    return window.sessionStorage.getItem(NAME_KEY);
  }
  public setListCardDetail(cartDetails: CartDetail[]) {
    window.sessionStorage.removeItem(LIST_CART_DETAIL);
    // @ts-ignore
    window.sessionStorage.setItem(LIST_CART_DETAIL,JSON.stringify(cartDetails));
  }

  public getListCardDetail(): any {
    return  JSON.parse(window.sessionStorage.getItem(LIST_CART_DETAIL));
  }
  public setCart(cart: Cart) {
    window.sessionStorage.removeItem(CART);
    // @ts-ignore
    window.sessionStorage.setItem(CART, JSON.stringify(cart));
  }

  public getCard(): any {
    return JSON.parse(window.sessionStorage.getItem(CART));
  }

  public getQuantityCartProduct(){
    let sum = 0 ;
    if(this.getListCardDetail()!== null){
      for (const listCardDetailElement of this.getListCardDetail()) {
        sum+=listCardDetailElement.quantity;
      }
    }
    return sum;
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
