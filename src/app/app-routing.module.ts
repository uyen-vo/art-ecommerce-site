import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
}, {
  path: 'products/:productId',
  component: ProductDetailsComponent,
}, {
  path: 'about',
  component: AboutComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
