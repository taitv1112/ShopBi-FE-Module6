import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Img} from '../../model/img';
import {TokenService} from '../../service/token.service';
import {CartDetail} from '../../model/cart-detail';
import {Promotion} from '../../model/promotion';
import {Category} from '../../model/category';
import {User} from '../../model/user';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  cart = this.tokenService.getCard();
  cartDetails=this.tokenService.getListCardDetail();
  idProduct:any;
  product = new Product(0,"","",0,0,0,0,0,0,"",
    new Category(0,"",""), new User(0,"","","","","","","","",0),
    new Promotion(0,"",0));
  imgList:Img[];
  constructor(private productService: ProductService,private router:ActivatedRoute,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.idProduct = this.router.snapshot.paramMap.get('id');
    this.getProductById();
    this.getImgProductById();

  }
  public getProductById():void{
    this.productService.getProductByID(this.idProduct).subscribe((response)=>{
        this.product = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })

  }
  public getImgProductById():void{
    this.productService.getImgsByProductId(this.idProduct).subscribe((response)=>{
        this.imgList = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })

  }
  public addToCart(product:Product){
    let flag = true;
    if(this.cartDetails!==undefined){
      for (let i = 0; i < this.cartDetails.length; i++) {
        if(product.id == this.cartDetails.product.id){
          this.tokenService.getListCardDetail()[i].quantity += 1;
          flag = false;
        }
      }
    }
    if(flag){
      this.cartDetails.push(new CartDetail(this.cart,product,1))
    }
    this.tokenService.setListCardDetail(this.cartDetails);
    console.log("this.cartDetails");
    console.log(this.cartDetails);
  }
}
