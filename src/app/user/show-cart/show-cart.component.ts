// @ts-ignore

import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenService} from '../../service/token.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-show-cart',
  templateUrl: './show-cart.component.html',
  styleUrls: ['./show-cart.component.scss'],

})
export class ShowCartComponent implements OnInit,AfterViewInit {

  @ViewChild("fullPrice") fullPrice :ElementRef;
  constructor( private tokenService: TokenService) { }

  ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }
  cartDetails = this.tokenService.getListCardDetail();
  ngOnInit(): void {
    this.showCart();
  }

  showCart(){
    var check = false;

    function changeVal(el) {
      var qt = parseFloat(el.parent().children(".qt").html());
      var price = parseFloat(el.parent().children(".price").html());
      var eq = Math.round(price * qt * 100) / 100;

      el.parent().children(".full-price").html( eq + "€" );

      changeTotal();
    }

    function changeTotal() {

      var price = 0;

      $(".full-price").each(function(index){
        price += parseFloat($(".full-price").eq(index).html());
      });

      price = Math.round(price * 100) / 100;
      var tax = Math.round(price * 0.05 * 100) / 100
      var shipping = parseFloat($(".shipping span").html());
      var fullPrice = Math.round((price + tax + shipping) *100) / 100;

      if(price == 0) {
        fullPrice = 0;
      }

      // @ts-ignore
      $(".subtotal span").html(price);
      // @ts-ignore
      $(".tax span").html(tax);
      // @ts-ignore
      $(".total span").html(fullPrice);
    }

    $(document).ready(function(){

      $(".remove").click(function(){
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
          function(){
            el.parent().parent().slideUp('fast', function() {
              el.parent().parent().remove();
              if($(".product").length == 0) {
                if(check) {
                  $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
                } else {
                  $("#cart").html("<h1>No products!</h1>");
                }
              }
              changeTotal();
            });
          }, 200);
      });

      $(".qt-plus").click(function(){
        // @ts-ignore
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

        $(this).parent().children(".full-price").addClass("added");

        var el = $(this);
        window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
      });

      $(".qt-minus").click(function(){

        let child = $(this).parent().children('.qt');

        if(parseInt(child.html()) > 1) {
          // @ts-ignore
          child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

        var el = $(this);
        window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
      });

      window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);

      $(".btn").click(function(){
        check = true;
        $(".remove").click();
      });
    });
  }

}
