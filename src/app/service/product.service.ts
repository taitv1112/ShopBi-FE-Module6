import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apilocal = environment.API_LOCAL;

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  public getProductByID(idProduct: number): Observable<Product> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/detail/' + idProduct);
  }
  // @ts-ignore
  public getProductsByCategoryOrderByQuantitySale(idCateogory: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/category/' + idCateogory);
  }
  // @ts-ignore
  public getProductsByPM(idPm: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/pm/' + idPm);
  }

  // @ts-ignore
  public getProductsBestSeller(): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/bestSale');
  }
  // @ts-ignore
  public getProductsBestSeller(): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/bestSale');
  }
  public getImgsByProductId(idProduct:any):Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'pm/img/'+idProduct);
  }

}
