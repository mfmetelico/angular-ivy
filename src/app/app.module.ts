import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { Products2Component } from './products2/products2.component';
import { ProductComponent } from './products/products.component';
import { ProductsFeatureModule } from './products-feature/products-feature.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    /*, Products2Component*/
  ],
  imports: [BrowserModule, AppRoutingModule, ProductsFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
  /*
  bootstrap: [ProductComponent],
  */
})
export class AppModule {}
