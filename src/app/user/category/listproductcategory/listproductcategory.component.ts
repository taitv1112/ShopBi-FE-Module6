import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../model/product';
import {identity} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-listproductcategory',
  templateUrl: './listproductcategory.component.html',
  styleUrls: ['./listproductcategory.component.scss']
})
export class ListproductcategoryComponent implements OnInit {
  idCategory :any;
  products:Product[];
  constructor(private productService:ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idCategory = this.router.snapshot.paramMap.get('id');
    this.getProducts();
  }

  public getProducts():void{
    this.productService.getProductsByCategoryOrderByQuantitySale(this.idCategory).subscribe((response)=>{
        this.products = response.content;
        console.log(this.products);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })

  }

}
