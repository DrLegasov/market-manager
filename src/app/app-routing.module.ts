import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MarketViewComponent } from './views/market-view/market-view.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { NewProductViewComponent } from './views/new-product-view/new-product-view.component';
import { EditProductViewComponent } from './views/edit-product-view/edit-product-view.component';

const routes: Routes = [
  { path: '', canActivate:[AuthGuard], component : MarketViewComponent},
  { path: 'home', canActivate:[AuthGuard], component : MarketViewComponent},
  { path: 'market/new', canActivate:[AuthGuard], component : NewProductViewComponent},
  { path: 'market/:id', canActivate:[AuthGuard], component : SingleProductViewComponent},
  { path: 'market/:id/edit', canActivate:[AuthGuard], component : EditProductViewComponent},
  { path: 'auth', component : AuthViewComponent},
  { path: 'not-found', component : ErrorViewComponent},
  { path: '**', redirectTo : 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
