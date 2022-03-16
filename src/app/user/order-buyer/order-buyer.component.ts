import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {OrderServiceService} from '../../service/order-service.service';
import {TokenService} from '../../service/token.service';
import {Orders} from '../../model/orders';
import {HttpErrorResponse} from '@angular/common/http';
import {OrderDetail} from '../../model/order-detail';
import {CartDetail} from '../../model/cart-detail';
import {RateProduct} from '../../model/rate-product';
import {Rate} from '../../model/rate';

@Component({
  selector: 'app-order-buyer',
  templateUrl: './order-buyer.component.html',
  styleUrls: ['./order-buyer.component.scss']
})
export class OrderBuyerComponent implements OnInit,AfterViewInit {
  rate:Rate;
  @ViewChild("rating") rating:ElementRef;
  checkLoad= false;
  orderList:Orders[];
  orderCurrent:Orders;
  cancelOrder: OrderDetail[];
  orderDetailList:OrderDetail[];
  checkOrder = false;
  constructor(private orderService:OrderServiceService, private tokenService:TokenService) {
    this.getListOrder();
  }

  ngAfterViewInit(): void {

    }

  ngOnInit(): void {

  }
  getListOrder(){
    this.orderService.getListOrderBuyer(this.tokenService.getUserNameKey().toLowerCase()).subscribe(
      (response)=>{
        this.orderList = response;
        console.log(this.orderList);
        console.log("this.orderList");
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  getListOrderDetailById(id:number){
    this.orderService.getListOrderDetailByOrderId(id).subscribe((response)=>{
         this.orderDetailList = response;
        this.checkLoad = true;
        this.checkOrder = true;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })
  }
  createRateProduct(rateProduct:RateProduct):void{
    this.orderService.createRateProduct(rateProduct).subscribe(
      (response)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onOpenModal(order: Orders, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      this.orderCurrent = order;
      // @ts-ignore
      this.orderDetailList = this.getListOrderDetailById(order.id);
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      // @ts-ignore
      this.orderDetailList = this.getListOrderDetailById(order.id);
      console.log("this.orderDetailList");
      console.log(this.orderDetailList);
      console.log("this.checkLoad");
      console.log(this.checkLoad);
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
  getRateByOrderId(id:any){
    this.orderService.getRate(id).subscribe(
      (response)=>{
        this.rate = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  onDeleteProduct(cancelOrder: OrderDetail[]) {
    console.log("cancelOrder");
    console.log(cancelOrder);
  }

  createRate(orderCurrent: Orders) {
    const radios = this.rating.nativeElement.elements.rating.value;
    // @ts-ignore
    this.orderService.getListOrderDetailByOrderId(orderCurrent.id).subscribe((response)=>{
        let orderDetailList = response;
        for (const cartDetail of orderDetailList) {
          this.createRateProduct(new RateProduct(orderCurrent,cartDetail.product,new Rate(radios,radios)))
        }
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      })
    // @ts-ignore

  }
}