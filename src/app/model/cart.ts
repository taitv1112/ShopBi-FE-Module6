import {User} from './user';

export class Cart {
  id! : number;

  constructor(id: number, user: User) {
    this.id = id;
  }

}
