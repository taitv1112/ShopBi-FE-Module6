import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../model/product';
import {Category} from '../../../model/category';
import {Promotion} from '../../../model/promotion';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id! : number;
  formEdit! : FormGroup;

  categoryList : Category[] = [];
  promotionList : Promotion[] = [];

  constructor(private http: HttpClient, private routerActive : ActivatedRoute, private router : Router) {
    this.routerActive.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'));
    })
    this.showFormEdit()
    this.getListCategory()
    this.getListPromotion()
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

  ngOnInit(): void {
    this.formEdit = new FormGroup({
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

  showFormEdit(){
    this.http.get<Product>("http://localhost:8080/pm/" + this.id).subscribe((data)=>{
      this.formEdit = new FormGroup({
        name: new FormControl(data.name),
        id: new FormControl(data.id),
        description: new FormControl(data.description),
        price: new FormControl(data.price),
        quantity: new FormControl(data.quantity),
        quantitySale: new FormControl(data.quantitySale),
        quantityMax: new FormControl(data.quantityMax),
        quantityMin: new FormControl(data.quantityMin),
        priceSale: new FormControl(data.priceSale),
        coverPhoto: new FormControl(data.coverPhoto),
        category: new FormControl(data.category),
        promotion: new FormControl(data.promotion)
      })
      console.log("vao show edit",this.formEdit.value)

    })
  }

  edit(){
    console.log("vao edit",this.formEdit.value)
    this.http.put<Product>("http://localhost:8080/pm" , this.formEdit.value).subscribe((data)=>{
      console.log("hdhdhdh");
      console.log(this.id)

    })
    this.router.navigate(["/pm/list"])
  }

}
