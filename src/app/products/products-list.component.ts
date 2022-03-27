import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../core/services/products/products.service";
import { Store } from "@ngrx/store";
import { loadProducts } from "./state/product.actions";
import { Product } from "../core/models/product";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products$ = this._productsService.products$;
  constructor(private _productsService: ProductsService, private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(loadProducts());
  }
}
