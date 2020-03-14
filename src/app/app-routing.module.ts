import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './views/cart/cart.component';
import { RegisterComponent } from './views/register/register.component';
import { SellerloginComponent } from './views/sellerlogin/sellerlogin.component';
import { BuyerloginComponent } from './views/buyerlogin/buyerlogin.component';

import { TqpaymentComponent } from './tqpayment/tqpayment.component';
import { SellerproductsComponent } from './views/sellerproducts/sellerproducts.component';
import { SelleraccessComponent } from './views/selleraccess/selleraccess.component';
import { SubcategoryWomensComponent } from './views/subcategory-womens/subcategory-womens.component';
import { SubcategoryMensComponent } from './views/subcategory-mens/subcategory-mens.component';
import { SubcategoryKidsComponent } from './views/subcategory-kids/subcategory-kids.component';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { DisplayProductsComponent } from './views/display-products/display-products.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "shop",
    component: ShopComponent,
    data: {
      title: "shop"
    }
  },

  {
    path: "sellerlogin",
    component: SellerloginComponent,
    data: {
      title: "SellerLogin"
    }
  },
  {
    path: "buyerlogin",
    component: BuyerloginComponent,
    data: {
      title: "BuyerLogin"
    }
  },

  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register"
    }
  },
  {
    path: "cart",
    component: CartComponent,
    data: {
      title: "Cart"
    }
  },
  {
    path: "subcategory-womens",
    component: SubcategoryWomensComponent,
    data: {
      title: "Subcategory-womens"
    }
  },
  {
    path: "subcategory",
    component: SubCategoryComponent,
    data: {
      title: "Subcategory"
    }
  },
  {
    path: "subcategory-mens",
    component: SubcategoryMensComponent,
    data: {
      title: "Subcategory-mens"
    }
  },
  {
    path: "subcategory-kids",
    component: SubcategoryKidsComponent,
    data: {
      title: "Subcategory-kids"
    }
  },
  {
    path: "check-out",
    component: CheckOutComponent,
    data: {
      title: "Check-out"
    }
  },
  {
    path: "tqpayment",
    component: TqpaymentComponent,
    data: {
      title: "Tqpayment"
    }
  },
  {
    path: "displayproducts",
    component: DisplayProductsComponent,
    data: {
      title: "Displayproducts"
    }
  },
  {
    path: "sellerproducts",
    component: SellerproductsComponent,
    data: {
      title: "Sellerproducts"
    }
  },
  {
    path: "sellerproducts",
    component: SellerproductsComponent,
    data: {
      title: "Sellerproducts"
    }
  },
  {
    path: "selleraccess",
    component: SelleraccessComponent,
    data: {
      title: "Selleraccess"
    }
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
