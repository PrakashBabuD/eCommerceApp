import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/core/models/product";
import * as fromProduct from "./product.reducer";

export const selectProductState = createFeatureSelector<fromProduct.ProductState>(fromProduct.productFeatureKey);

export const selectProducts = createSelector(selectProductState, (state: fromProduct.ProductState) => state.entities);
