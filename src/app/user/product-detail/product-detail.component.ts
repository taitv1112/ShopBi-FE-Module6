import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../model/product';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Img} from '../../model/img';
import {TokenService} from '../../service/token.service';
import {CartDetail} from '../../model/cart-detail';
import {Category} from '../../model/category';

import {Promotion} from '../../model/promotion';
import {User} from '../../model/user';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit,AfterViewInit {
  @ViewChild("productImages") productImages:ElementRef;
  @ViewChild("productImageSlide") productImageSlide:ElementRef;
  quantityProductNow:number;
  cart = this.tokenService.getCard();
  cartDetails=this.tokenService.getListCardDetail();
  idProduct:any;
  product =  new Product(0,"","",0,0,0,0,0,0,"",
    new Category(0,"",""), new User(0,"","","","","","","",0,[]),
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
        this.quantityProductNow = this.product.quantity;

        let cartDetailList = this.tokenService.getListCardDetail();
        console.log("cartDetailList");
        console.log(cartDetailList);
        if(cartDetailList!==null){
          for (const listCardDetailElement of cartDetailList) {
            if(listCardDetailElement.product.id== this.product.id){
              if(this.quantityProductNow<listCardDetailElement.quantity){
                this.quantityProductNow=0;
                listCardDetailElement.quantity = this.product.quantityMax;
                this.tokenService.setListCardDetail(cartDetailList);
              }else {
                this.quantityProductNow = this.quantityProductNow-listCardDetailElement.quantity;
              }

            }
          }
        }
        this.productImageSlide.nativeElement.style.backgroundImage = `url('${this.product.coverPhoto}')`

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

    if(this.cartDetails!==null){
      console.log(this.cartDetails)
      for (let i = 0; i < this.cartDetails.length; i++) {
        if(product.id == this.cartDetails[i].product.id && this.quantityProductNow>0){
          this.quantityProductNow --;
          this.cartDetails[i].quantity += 1;
          flag = false;
        }
      }
    }
    if(flag && this.quantityProductNow>0){
      if(this.cartDetails == null){
        this.cartDetails = [];
        this.cartDetails.push(new CartDetail(this.cart,product,1))
      }else {
        this.cartDetails.push(new CartDetail(this.cart,product,1))
      }
      this.quantityProductNow--;
    }
    this.tokenService.setListCardDetail(this.cartDetails);
    this.tokenService.changeQuantityCart(this.tokenService.getQuantityCartProduct());
  }
  showPicture(img:string){
        this.productImageSlide.nativeElement.style.backgroundImage = `url('${img}')`; // setting up image slider's background image
  }
  ngAfterViewInit(): void {
  }
}
