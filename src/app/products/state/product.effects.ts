import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { of } from "rxjs";

import * as ProductActions from "./product.actions";
import { ProductsService } from "./../../core/services/products/products.service";

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      concatMap(() =>
        this._productsService.getProducts().pipe(
          map(data => ProductActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductActions.loadProductsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private _productsService: ProductsService) {}
}
