import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { BrandsComponent } from './component/brands/brands.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlanckLayoutComponent } from './layouts/blanck-layout/blanck-layout.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './component/details/details.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AllordersComponent } from './component/allorders/allorders.component';

const routes: Routes = [



  {path:"",component:BlanckLayoutComponent,children:[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:'setting',loadChildren:()=>import('../app/new-setting/new-setting.module').then((m)=>m.NewSettingModule)},
  
  
  
    {path:"home", canActivate:[authGuard],component:HomeComponent},
    {path:"products", canActivate:[authGuard],component:ProductsComponent},
    {path:"details/:id", canActivate:[authGuard],component:DetailsComponent},
  
  
    {path:"cart", canActivate:[authGuard],component:CartComponent},
  
    {path:"payment/:id", canActivate:[authGuard],component:PaymentComponent},
  
    {path:"allorders", canActivate:[authGuard],component:HomeComponent},
  
  
  
    {path:"brands", canActivate:[authGuard],component:BrandsComponent},
    {path:"categories", canActivate:[authGuard],component:CategoriesComponent},
  ]},
  


{path:"",component:AuthLayoutComponent,children:[
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},

]},








 
  
  {path:"**",component:NotfoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
