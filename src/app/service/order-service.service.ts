import { Injectable } from '@angular/core';
import {OrderForm} from '../model/OrderForm';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {OrderPMs} from '../model/OrderPMs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private apilocal = environment.API_LOCAL;
  constructor(private http:HttpClient) { }
  public createOrder(orderPMs:OrderPMs):Observable<OrderPMs>{
    return this.http.post<OrderPMs>(this.apilocal+"index/checkOutOrder", orderPMs);
  }

  public getListOrderBuyer(username:any):Observable<any> {
    // @ts-ignore
    return this.http.get(this.apilocal + 'index/findOrder/'+username);
  }
  public getListOrderDetailByOrderId(id:any):Observable<any> {
    // @ts-ignore
    return this.http.get(this.apilocal + 'index/findOrderDetail/'+id);
  }
}
