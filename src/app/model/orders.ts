import {User} from './user';

export class Orders {
   id! : number;
  address_ship: string;
    totalBill : number;
    status: string;

    user :User;


  constructor(id: number, address_ship: string, totalBill: number, status: string, user: User) {
    this.id = id;
    this.address_ship = address_ship;
    this.totalBill = totalBill;
    this.status = status;
    this.user = user;
  }
}
