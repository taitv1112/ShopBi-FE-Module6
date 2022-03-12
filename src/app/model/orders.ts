import {User} from './user';

export class Orders {
   id! : number;
  address_ship: string;
    total_bill : number;
    status: string;

    user :User;

  constructor(id: number, address_ship: string, total_bill: number, status: string, user: User) {
    this.id = id;
    this.address_ship = address_ship;
    this.total_bill = total_bill;
    this.status = status;
    this.user = user;
  }
}
