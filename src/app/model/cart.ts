import {User} from './user';

export class Cart {
  id! : number;
   user : User;


  constructor(id: number, user: User) {
    this.id = id;
    this.user = user;
  }

}
