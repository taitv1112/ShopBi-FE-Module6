import {User} from './user';

export class Cart {
  private id! : number;

  constructor(id: number, user: User) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }
}
