import { Component, Input, OnInit } from "@angular/core";
import { Product } from "./../../core/models/product";
import { ProductsService } from "./../../core/services/products/products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    sku: "",
    name: "",
    price: 0,
    rrp: 0,
    image: ""
  };
  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {}

  getDiscountMessage() {
    let discountMessage: string = "";
    let discountDetails = this._productService.getProductDiscountDetails(this.product);
    discountMessage = discountDetails.isDiscountAvailable
      ? `$${discountDetails.discount} off RRP of $${discountDetails.rrp}`
      : "";
    return discountMessage;
  }
}
