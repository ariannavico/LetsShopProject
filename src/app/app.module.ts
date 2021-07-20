import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryPageComponent } from './pages/category-page/category-page.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductDetailComponent,
    CategoryFilterComponent,
    FilterComponent,
    CardProductComponent,
    CardSmallComponent,
    CardBigComponent,
    CategoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
