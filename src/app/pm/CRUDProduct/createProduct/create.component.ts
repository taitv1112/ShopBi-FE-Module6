import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../model/product';
import {Router} from '@angular/router';
import {Category} from '../../../model/category';
import {Promotion} from '../../../model/promotion';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private http : HttpClient,private router : Router) {
    this.getListCategory()
    this.getListPromotion()
  }

  formCreate : FormGroup;
  categoryList : Category[] = [];
  promotionList : Promotion[] = [];


  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", Validators.minLength(6)),
      description: new FormControl( "",Validators.minLength(6)),
      price: new FormControl(0,Validators.pattern("^[0-9]+$")),
      quantity: new FormControl(0,Validators.pattern("^[0-9]+$")),
      quantitySale: new FormControl(0,Validators.pattern("^[0-9]+$")),
      quantityMax: new FormControl(0,Validators.pattern("^[0-9]+$")),
      quantityMin: new FormControl(0,Validators.pattern("^[0-9]+$")),
      priceSale: new FormControl(0,Validators.pattern("^[0-9]+$")),
      coverPhoto: new FormControl("",Validators.minLength(6)),
      category: new FormControl(),
      promotion: new FormControl()
    })
  }

  getListCategory(){
    this.http.get<Category[]>("http://localhost:8080/pm/category").subscribe((data)=>{
      this.categoryList = data;
    })
  }

  getListPromotion(){
    this.http.get<Promotion[]>("http://localhost:8080/pm/promotion").subscribe((data)=>{
      this.promotionList = data;
    })
  }

  create(){
    console.log("vào đây k");
    this.http.post<Product>("http://localhost:8080/pm", this.formCreate.value).subscribe((data)=>{
      console.log(data);
    })
    this.router.navigate(["/pm/listProduct"])
  }
}
