import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Router, RouterModule} from '@angular/router';
import {ThemePickerModule} from '../theme-picker';
import {ThemeStorage} from '../theme-picker/theme-storage/theme-storage';
import {StyleManager} from '../style-manager';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {TokenService} from '../../service/token.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  categories:Category[];
  name: any;
  isCheckLogin = false;
  avatar: any;
  constructor(private tokenService: TokenService, private categoryService: CategoryService, private router: Router) {
  }
  ngOnInit(): void {
    if(this.tokenService.getTokenKey()){
      this.isCheckLogin = true;
      this.name = this.tokenService.getNameKey();
      this.avatar = this.tokenService.getAvatarKey();
      console.log(this.name);
      console.log(this.isCheckLogin);
      console.log(this.avatar);
    }
    this.getCategories();
    this.narbarOption();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log('data');
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
   createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<div class="nav">
    <a [routerLink]="['/index']"><img src="assets/img/dark-logo.png" class="brand-logo" alt=""></a>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a>
            <img src="assets/img/user.png" id="user-img" alt="">
            <div class="login-logout-popup hide">
                <p class="account-info">Log in as, name</p>
                <button class="btn" id="user-btn">Log out</button>
            </div>
        </a>
        <a href="#"><img src="assets/img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container" >
    <li class="link-item" *ngFor="let c of categories"><a (click)="showProductsByCategory(c.id)" class="link">{{c.name}}</a></li>
</ul>
    `;
  }
  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }
  showProductsByCategory(id:number) {
    window.sessionStorage.clear();
    this.router.navigate(['showProductByCategory',id]).then(() => {
      window.location.reload();
    });
  }

  narbarOption(){
    const userImageButton = document.querySelector('#user-img');
    const userPopup = document.querySelector('.login-logout-popup');
    const popuptext = document.querySelector('.account-info');
    const actionBtn = document.querySelector('#user-btn');

    userImageButton.addEventListener('click', () => {
      userPopup.classList.toggle('hide');
    })

    window.onload = () => {
      let user = this.tokenService.getNameKey();
      if(user != null){
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
          this.logOut();
        })
      } else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
          this.router.navigate(['login']).then(() => {
            window.location.reload();
          });
        })
      }
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule,
    MatIconModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: [StyleManager, ThemeStorage]
})
export class NavBarModule {}
