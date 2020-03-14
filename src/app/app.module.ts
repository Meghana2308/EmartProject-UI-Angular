import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { HeaderComponent } from './views/_layout/header/header.component';
import { FooterComponent } from './views/_layout/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';

import { RegisterComponent } from './views/register/register.component';
import { SellerloginComponent } from './views/sellerlogin/sellerlogin.component';
import { BuyerloginComponent } from './views/buyerlogin/buyerlogin.component';
import { CartComponent } from './views/cart/cart.component';


import { CheckOutComponent } from './check-out/check-out.component';
import { TqpaymentComponent } from './tqpayment/tqpayment.component';
import { SellerproductsComponent } from './views/sellerproducts/sellerproducts.component';
import { SelleraccessComponent } from './views/selleraccess/selleraccess.component';
import { SubcategoryWomensComponent } from './views/subcategory-womens/subcategory-womens.component';
import { SubcategoryMensComponent } from './views/subcategory-mens/subcategory-mens.component';
import { SubcategoryKidsComponent } from './views/subcategory-kids/subcategory-kids.component';
import { ProductService } from './service/product.service';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayProductsComponent } from './views/display-products/display-products.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    RegisterComponent,
    SellerloginComponent,
    BuyerloginComponent,
    CartComponent,
    CheckOutComponent,
    TqpaymentComponent,
    SellerproductsComponent,
    SelleraccessComponent,
    SubcategoryWomensComponent,
    SubcategoryMensComponent,
    SubcategoryKidsComponent,
    SubCategoryComponent,
    DisplayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, AppRoutingModule]
})
export class AppModule { }
