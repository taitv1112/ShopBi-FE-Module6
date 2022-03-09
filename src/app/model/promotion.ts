export class Promotion {
  private  id : number;
  private  name : string;
  private  discount: number;

  constructor(id: number, name: string, discount: number) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }
}
