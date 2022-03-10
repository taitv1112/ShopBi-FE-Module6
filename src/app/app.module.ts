import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './form_login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './form_login/login/login.component';
import {UserAccountComponent} from './form_login/user-account/user-account.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar.component';
import {httpInterceptorProvider} from './secuirty/auth.interceptor';
import {ChangeAvatarComponent} from './manage-profile/change-avatar/change-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import { AdminComponent } from './admin/admin/admin.component';
import { PmComponent } from './pm/pm/pm.component';
import { UserComponent } from './user/user/user.component';
import {ShowListComponent} from './pm/CRUDProduct/show-list/show-list.component';
import { IndexComponent } from './user/index/index.component';
import {EditComponent} from './pm/CRUDProduct/edit/edit.component';
import { CreateComponent } from './pm/CRUDProduct/create/create.component';


export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-account', component: UserAccountComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'pm', component: PmComponent},
  {path: 'pm/list', component: ShowListComponent},
  {path: 'pm/edit/:id', component: EditComponent},
  {path: 'pm/create', component: CreateComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'index', component: UserComponent},

  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, UploadAvatarComponent, ChangeAvatarComponent, AdminComponent, PmComponent, UserComponent,ShowListComponent, IndexComponent,EditComponent, CreateComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    MatInputModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    // tslint:disable-next-line:max-line-length
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatDialogModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {

}
