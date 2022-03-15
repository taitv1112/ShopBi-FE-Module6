// @ts-ignore

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenService} from '../../service/token.service';
import * as $ from 'jquery';
import {OrderPMs} from '../../model/OrderPMs';
import {CartDetail} from '../../model/cart-detail';
import {User} from '../../model/user';

@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss'],

})
export class ShowCartComponent implements OnInit, AfterViewInit {
  quantityEdit: any;
  userPm = null;
  @ViewChild('fullPrice') fullPrice: ElementRef;
  cartDetails: CartDetail[] = this.tokenService.getListCardDetail();

  constructor(private tokenService: TokenService) {
  }

  orderPmList: OrderPMs[] = [];
  orderPm: OrderPMs = null;

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    // this.showCart();
    this.getUsersPm();

  }

  //5 a b  c d e
  //nha 1 : listcartdeatail  ab (product , quantity )
  //nha 2 : liscart c
  //nha 3 : liscart  de

  showCart() {
    var check = false;

    function changeVal(el) {
      var qt = parseFloat(el.parent().children('.qt').html());
      var price = parseFloat(el.parent().children('.price').html());
      var eq = Math.round(price * qt * 100) / 100;

      el.parent().children('.full-price').html(eq + '€');

      changeTotal();
    }

    function changeTotal() {

      var price = 0;

      $('.full-price').each(function(index) {
        price += parseFloat($('.full-price').eq(index).html());
      });

      price = Math.round(price * 100) / 100;
      var tax = Math.round(price * 0.05 * 100) / 100;
      var shipping = parseFloat($('.shipping span').html());
      var fullPrice = Math.round((price + tax + shipping) * 100) / 100;

      if (price == 0) {
        fullPrice = 0;
      }

      // @ts-ignore
      $('.subtotal span').html(price);
      // @ts-ignore
      $('.tax span').html(tax);
      // @ts-ignore
      $('.total span').html(fullPrice);
    }

    $(document).ready(function() {

      $('.remove').click(function() {
        var el = $(this);
        el.parent().parent().addClass('removed');
        window.setTimeout(
          function() {
            el.parent().parent().slideUp('fast', function() {
              el.parent().parent().remove();
              if ($('.product').length == 0) {
                if (check) {
                  $('#cart').html('<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href=\'https://codepen.io/ziga-miklic/pen/xhpob\'>CodePen</a>. Thank you!</p>');
                } else {
                  $('#cart').html('<h1>No products!</h1>');
                }
              }
              changeTotal();
            });
          }, 200);
      });

      $('.qt-plus').click(function() {
        // @ts-ignore
        $(this).parent().children('.qt').html(parseInt($(this).parent().children('.qt').html()) + 1);

        $(this).parent().children('.full-price').addClass('added');

        var el = $(this);
        window.setTimeout(function() {
          el.parent().children('.full-price').removeClass('added');
          changeVal(el);
        }, 150);
      });

      $('.qt-minus').click(function() {

        let child = $(this).parent().children('.qt');

        if (parseInt(child.html()) > 1) {
          // @ts-ignore
          child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children('.full-price').addClass('minused');

        var el = $(this);
        window.setTimeout(function() {
          el.parent().children('.full-price').removeClass('minused');
          changeVal(el);
        }, 150);
      });

      window.setTimeout(function() {
        $('.is-open').removeClass('is-open');
      }, 1200);

      $('.btn').click(function() {
        check = true;
        $('.remove').click();
      });
    });
  }

  getUsersPm(): User[] {
    this.cartDetails = this.tokenService.getListCardDetail();
    if (this.cartDetails !== null) {
      for (let i = 0; i < this.cartDetails.length; i++) {
        if (this.userPm !== null) {
          let check = true;
          for (let j = 0; j < this.userPm.length; j++) {
            if (this.userPm[j] !== null) {
              if (this.cartDetails[i].product.user.id == this.userPm[j].id) {
                check = false;
                break;
              }
            }
          }
          if (check) {
            this.userPm.push(this.cartDetails[i].product.user);
          }
        } else {
          this.userPm = [];
          this.userPm.push(this.cartDetails[i].product.user);
        }
      }
      console.log('this.userPm');
      console.log(this.userPm);
      if (this.userPm !== null) {
        for (let g = 0; g < this.userPm.length; g++) {
          for (let h = 0; h < this.cartDetails.length; h++) {
            if (this.cartDetails[h].product.user.id == this.userPm[g].id) {
              if (this.orderPm !== null) {
                this.orderPm.cartDetails.push(this.cartDetails[h]);
                this.orderPm.user = this.userPm[g];
              } else {
                this.orderPm = new OrderPMs([], null);
                this.orderPm.cartDetails.push(this.cartDetails[h]);
                this.orderPm.user = this.userPm[g];
              }
            }
          }

          this.orderPmList.push(this.orderPm);
          this.orderPm = null;
        }
        console.log('this.orderPmList');
        console.log(this.orderPmList);
        this.userPm = null;
      }
    } else {
      return;
    }
  }


  updateCart(cartDetail: CartDetail, quantityEdit, indexListOrderPMs, indexOrderPmsCartdetail) {
    console.log('cartDetail');
    console.log(cartDetail);
    console.log('quantityEdit');
    console.log(quantityEdit);
    this.cartDetails = this.tokenService.getListCardDetail();
    if (quantityEdit >= 1) {
      if (quantityEdit < cartDetail.product.quantityMax) {
        this.orderPmList[indexListOrderPMs].cartDetails[indexOrderPmsCartdetail].quantity = quantityEdit;
      } else {
        this.orderPmList[indexListOrderPMs].cartDetails[indexOrderPmsCartdetail].quantity = cartDetail.product.quantityMax;
        alert('Quantity Available' + cartDetail.product.quantityMax);
      }
      for (const cartDetailE of this.cartDetails) {
        if (cartDetailE.product.id == cartDetail.product.id) {
          if (quantityEdit < cartDetailE.product.quantityMax) {
            cartDetail.quantity = quantityEdit;
          } else {
            cartDetail.quantity = cartDetailE.product.quantityMax;
          }
        }
      }
      this.tokenService.setListCardDetail(this.cartDetails);
    }else {
      this.orderPmList[indexListOrderPMs].cartDetails.splice(indexOrderPmsCartdetail,1);
      this.cartDetails = this.cartDetails.filter(item=>item !== cartDetail );
      console.log("this.cartDetails");
      console.log(this.cartDetails);
      this.tokenService.setListCardDetail(this.cartDetails);
    }
    console.log(this.cartDetails);
    console.log(this.orderPmList);
  }
}
