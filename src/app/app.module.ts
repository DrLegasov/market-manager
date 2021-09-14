import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketService } from './services/products/market.service';
import { ProductComponent } from './product/product.component';
import { MarketViewComponent } from './views/market-view/market-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';
import { FormsModule } from '@angular/forms';
import { ErrorViewComponent } from './views/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MarketViewComponent,
    AuthViewComponent,
    HeaderComponent,
    SingleProductViewComponent,
    ErrorViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MarketService,
    AuthService],
  bootstrap: [
    AppComponent],

})
export class AppModule { }
