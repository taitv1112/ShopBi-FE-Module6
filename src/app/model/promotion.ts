export class Promotion {
    id : number;
    name : string;
   discount: number;

  constructor(id: number, name: string, discount: number) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }
}
