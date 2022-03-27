import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { StoreModule } from "@ngrx/store";
import * as fromProduct from "./state/product.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./state/product.effects";
import { ButtonModule } from "primeng/button";
import { ProductsListComponent } from "./products-list.component";

@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    ButtonModule,
    StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule {}
