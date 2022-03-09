import {User} from './user';

export class Cart {
  private  id! : number;
  private  user : User;


  constructor(id: number, user: User) {
    this.id = id;
    this.user = user;
  }
}
