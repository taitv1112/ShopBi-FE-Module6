import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../../../model/orders';

@Component({
  selector: 'app-order-in-pm',
  templateUrl: './order-in-pm.component.html',
  styleUrls: ['./order-in-pm.component.scss']
})
export class OrderInPmComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getListOrderPending()
  }
  status:string = 'Pending'
  orderList:Orders[] = []
  ngOnInit(): void {
  }

  getListOrderPending(){
    this.http.get<Orders[]>("http://localhost:8080/orderInPm/listOrder/1?"+status).subscribe((data)=>{
      this.orderList= data
    })
  }


}
