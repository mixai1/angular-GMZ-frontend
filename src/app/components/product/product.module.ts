import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductAPPComponent } from './product-app/product-app.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ProductANComponent } from './product-an/product-an.component';
import { ProductASComponent } from './product-as/product-as.component';
import { ItemProdComponent } from './item-prod/item-prod.component';
import { ProductAllComponent } from './product-all/product-all.component';

@NgModule({
  declarations:
    [
      ProductComponent,
      ProductAPPComponent,
      ProductANComponent,
      ProductASComponent,
      ItemProdComponent,
      ProductAllComponent
    ],
  imports: [CommonModule, AppRoutingModule]
})
export class ProductModule { }
