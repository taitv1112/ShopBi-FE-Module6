import {RoleName} from './role-name';

export class Role {
  private  id : number;

  private  name: RoleName;


  constructor(id: number, name: RoleName) {
    this.id = id;
    this.name = name;
  }
}
