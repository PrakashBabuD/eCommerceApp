import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectProducts } from "src/app/products/state/product.selectors";
import { Product } from "./../../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products$ = <Observable<Product[]>>this._store.select(selectProducts);
  constructor(private _http: HttpClient, private _store: Store) {}

  getProducts(): Observable<Product[]> {
    return <Observable<Product[]>>this._http.get("../../../../data/MOCK_DATA.json");
  }

  getProductDiscountDetails(product: Product): { isDiscountAvailable?: boolean; discount?: number; rrp?: number } {
    let discountDetails: { isDiscountAvailable?: boolean; discount?: number; rrp?: number } = {};
    discountDetails["isDiscountAvailable"] = product.price < product.rrp;
    discountDetails["discount"] = product.rrp - product.price;
    discountDetails["rrp"] = product.rrp;
    return discountDetails;
  }
}
