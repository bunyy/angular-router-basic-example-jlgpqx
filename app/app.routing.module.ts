import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';

@NgModule({
  declarations: [LoginViewComponent, HomeViewComponent, CatalogViewComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: LoginViewComponent },
      { path: 'product-details/:id', component: HomeViewComponent },
      { path: 'add-product', component: CatalogViewComponent },

      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
