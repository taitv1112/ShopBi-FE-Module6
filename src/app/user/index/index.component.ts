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
  bestProducts: Product[];
  top1CategoryProducts: Product[];
  categories:Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getBestSeller();
    this.getTop3Categories();
  }


  public getTop3Categories(): void {
    this.categoryService.getTop3Categories().subscribe(
      (data) => {
        this.categories = data;
        this.getTop1CategoryProducts();
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
        console.log(this.bestProducts);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public getTop1CategoryProducts():void{
    this.productService.getProductsByCategoryOrderByQuantitySale(this.categories[0].id).subscribe(
      (response)=>{
        this.top1CategoryProducts = response.content;
        console.log(this.top1CategoryProducts);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
