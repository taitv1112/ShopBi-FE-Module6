import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../service/order-service.service';
import {TokenService} from '../../service/token.service';
import {Orders} from '../../model/orders';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderDetail} from '../../model/order-detail';
import {CartDetail} from '../../model/cart-detail';

@Component({
  selector: 'app-order-buyer',
  templateUrl: './order-buyer.component.html',
  styleUrls: ['./order-buyer.component.scss']
})
export class OrderBuyerComponent implements OnInit {
  checkLoad= false;
  orderList:Orders[];
  cancelOrder: OrderDetail[];
  orderDetailList:OrderDetail[];
  constructor(private orderService:OrderServiceService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.getListOrder();
  }
  getListOrder(){
    this.orderService.getListOrderBuyer(this.tokenService.getUserNameKey().toLowerCase()).subscribe(
      (response)=>{
        this.orderList = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  getListOrderDetailById(id:number){
      alert("van o ngoai")
    this.orderService.getListOrderDetailByOrderId(id).subscribe((response)=>{
        alert("vào trong")
         this.orderDetailList = response;
        this.checkLoad = true;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })
  }

  public onOpenModal(order: Orders, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      // @ts-ignore
      this.orderDetailList = this.getListOrderDetailById(order.id);
      console.log("this.orderDetailList");
      console.log(this.orderDetailList);
      while(this.checkLoad)
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      // @ts-ignore
      this.cancelOrder = order;
      console.log("this.cancelOrder");
      console.log(this.cancelOrder);
      button.setAttribute('data-target', '#deleteProductModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  getTotalBillByPm(cartDeatails: OrderDetail[]):number{
    let sum = 0;
    for (const cartDeatail of cartDeatails) {
      sum+= (cartDeatail.quantity*cartDeatail.product.priceSale)
    }
    return sum;
  }

  onDeleteProduct(cancelOrder: OrderDetail[]) {
    console.log("cancelOrder");
    console.log(cancelOrder);
  }
}
