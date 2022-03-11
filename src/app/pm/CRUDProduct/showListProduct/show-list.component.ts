import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  listProduct : Product[] = [];

  constructor(private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct(){
    this.http.get<Product[]>("http://localhost:8080/pm/product").subscribe((data)=>{
      this.listProduct = data;
    })
  }

  delete(id : number){
    this.http.delete("http://localhost:8080/pm/" + id).subscribe((data)=>{
      this.getListProduct()
    })
  }



}
