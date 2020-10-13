import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutComponent } from './about/about.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgxGalleryModule } from 'ngx-gallery-9';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
