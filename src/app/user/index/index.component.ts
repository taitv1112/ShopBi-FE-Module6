import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {HttpErrorResponse} from '@angular/common/http';
import {error} from 'ng-packagr/lib/utils/log';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }


  public getBestSeller(): void {

    this.productService.getProductsBestSeller().subscribe(
      data => {
        this.products = data;
        console.log('data');
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

}
