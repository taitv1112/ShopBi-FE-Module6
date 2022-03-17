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
  public getProductsBestSellerPT(page:number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/bestSale?pageNumber='+page);
  }
  public getImgsByProductId(idProduct:any):Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'pm/img/'+idProduct);
  }

  public getCartDetailsByCartId(idCart:any):Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/cartdetail/'+idCart);
  }
  public getProductNew():Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/new10Product');
  }

  public getTop15ProductsalePm(idPm:any):Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/Top15ProductsalePm/'+idPm);
  }
  public findByPmAndCate(idU:any,idC:any):Observable<any> {
    // @ts-ignore
    return this.httpClient.get(this.apilocal + 'index/findByPmAndCate/'+idU +"?idC="+idC);
  }


}
