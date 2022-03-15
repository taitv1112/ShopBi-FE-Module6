import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {data} from 'jquery';
import {Roles} from '../../model/roles';
import {isFakeMousedownFromScreenReader} from '@angular/cdk/a11y';

@Component({
  selector: 'app-show-list-user',
  templateUrl: './show-list-user.component.html',
  styleUrls: ['./show-list-user.component.scss']
})
export class ShowListUserComponent implements OnInit {
  listUser:User[] =[]

  constructor(private  http:HttpClient) {
    this.getListUser()
  }



  ngOnInit(): void {
  }
  getListUser(){
    this.http.get("http://localhost:8080/admin/listUser").subscribe((data)=>{
      this.listUser = data['content']
      console.log(this.listUser);

    })
  }
    checkRole(user:User){
   let  flag = false;
      for (let i = 0; i <user.roles.length ; i++) {
          if (user.roles[i].id ===2 || user.roles[i].id ===3){
            flag = true
          }
      }
      return flag;
    }

  upToPm(id:number){
    if (confirm("Bạn có chắc chắn không ?")){
      this.http.get("http://localhost:8080/admin/upToPm/"+id).subscribe((data)=>{
        console.log(data);
        this.getListUser()
      })
    }
  }
  downToUser(id:number){
    if (confirm("Bạn có chắc chắn không ?")){
      this.http.get("http://localhost:8080/admin/downToUser/"+id).subscribe((data)=>{
        console.log(data);
        this.getListUser()
      })
    }
  }

}
