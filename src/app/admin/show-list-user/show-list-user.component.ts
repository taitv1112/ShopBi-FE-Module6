import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {data} from 'jquery';
import {Roles} from '../../model/roles';

@Component({
  selector: 'app-show-list-user',
  templateUrl: './show-list-user.component.html',
  styleUrls: ['./show-list-user.component.scss']
})
export class ShowListUserComponent implements OnInit {
  listUser:User[] =[]
  roles:string[] =[]
  constructor(private  http:HttpClient) {
    this.getListUser()
  }

  ngOnInit(): void {
  }
  getListUser(){
    this.http.get("http://localhost:8080/admin/listUser").subscribe((data)=>{
      this.listUser = data['content']
      console.log(this.listUser);
      for (let i = 0; i < this.listUser.length; i++) {
        let str = ''
        for (let j = 0; j < this.listUser[i].roles.length; j++) {
            str+=this.listUser[i].roles[j].name +","
        }
        this.roles.push(str)
      }
      console.log("roles",this.roles);
    })
  }

}
