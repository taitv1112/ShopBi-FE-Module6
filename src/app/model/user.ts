export class User {
  private  id! : number;
  private  name! :string;
  private  username! :string;
  private  email! :string;
  private  password! :string;
  private  avatar! :string;
  private  phone! : string;
  private  address! :string;
  private  name_store! :string;
  private  rate_number! :number;


  constructor(id: number, name: string, username: string, email: string, password: string, avatar: string, phone: string, address: string, name_store: string, rate_number: number) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.phone = phone;
    this.address = address;
    this.name_store = name_store;
    this.rate_number = rate_number;
  }
}
