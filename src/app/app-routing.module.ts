import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'category/:cat', component: CategoryPageComponent},
  {path: 'product/:productId', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
