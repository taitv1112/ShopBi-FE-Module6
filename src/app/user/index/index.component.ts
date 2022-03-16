import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'ng-packagr/lib/utils/log';
import {Category} from '../../model/category';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  checkLoadBestProducts = false;
  checkLoadTopCategory = false;
  checkCategory = false;
  bestProducts!: Product[];
  top1CategoryProducts!: Product[];
  categories!:Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.getTop1CategoryProducts();
  }

  ngOnInit(): void {
    this.getBestSeller();
    this.getTop3Categories();
  }


  public getTop3Categories(): void {
      this.categoryService.getTop3Categories().subscribe(
        (data) => {
          this.categories = data;
          this.checkCategory = true;
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      );
  }
  public getBestSeller():void{
    this.productService.getProductsBestSeller().subscribe(
      (response)=>{
        this.bestProducts = response.content;
        this.checkLoadBestProducts = true;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public getTop1CategoryProducts():void{
    this.categoryService.getTop3Categories().subscribe(
      (data) => {
        this.productService.getProductsByCategoryOrderByQuantitySale(data[0].id).subscribe(
          (response)=>{
            this.top1CategoryProducts = response.content;
            this.checkLoadTopCategory = true;
          },
          (error:HttpErrorResponse)=>{
            alert(error.message);
          }
        );
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

}
