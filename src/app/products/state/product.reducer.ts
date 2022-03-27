import { Action, createReducer, on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { Product } from "./../../core/models/product";

export const productFeatureKey = "product";

export interface ProductState {
  entities: Product[];
  hasLoaded: boolean;
}

export const initialState: ProductState = {
  entities: [],
  hasLoaded: false
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => state),
  on(ProductActions.loadProductsSuccess, (state: ProductState, action) => {
    return {
      ...state,
      entities: action.data
    };
  }),
  on(ProductActions.loadProductsFailure, (state, action) => state)
);
