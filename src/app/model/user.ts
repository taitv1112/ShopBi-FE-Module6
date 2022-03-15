export class User {
 id! : number;
 name! :string;
 username! :string;
  email! :string;
 avatar! :string;
  phone! : string;
 address! :string;
  name_store! :string;
  rate_number! :number;


  constructor(id: number, name: string, username: string, email: string,  avatar: string, phone: string, address: string, name_store: string, rate_number: number) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
    this.phone = phone;
    this.address = address;
    this.name_store = name_store;
    this.rate_number = rate_number;
  }
}
