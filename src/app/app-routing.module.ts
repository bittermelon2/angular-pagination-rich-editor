import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'user', component: UserComponent, 
        children:[{path:'list',  component: UserlistComponent}, {path:'vip',  component: VipComponent},
                  {path:'add',  component: AdduserComponent},  {path:'edit',  component: EdituserComponent},
                  {path:'list',  redirectTo: 'list'}] },

  { path:'product', component: ProductComponent },
  { path:'shop', component: ShopComponent },
  { path:'**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
