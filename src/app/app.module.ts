import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Component } from '@angular/Core';
// import { NzButtonModule } from 'ng-zorro-antd/button';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
// import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';

// import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';

// import { IconDefinition } from '@ant-design/icons-angular';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//MUST have the following in order to use datepicker
import { registerLocaleData } from '@angular/common'; import zh from '@angular/common/locales/zh'; registerLocaleData(zh);

import { NzDropDownModule } from 'ng-zorro-antd';

import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { RandomUserServiceService } from './services/random-user-service.service';

//rich editor 
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    ShopComponent,
    UserlistComponent,
    VipComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NzButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NzDropDownModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [RandomUserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
