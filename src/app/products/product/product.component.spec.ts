import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductComponent } from "./product.component";
import { ProductsService } from "./../../core/services/products/products.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { initialState } from "../state/product.reducer";
import { provideMockStore } from "ngrx-mockstore";
import { DebugElement } from "@angular/core";

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [ProductsService, HttpClient, provideMockStore({ initialState })],
      imports: [HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display name correctly", () => {
    component.product = {
      sku: "671695659-X",
      name: "Veal Inside - Provimi",
      price: 166,
      rrp: 223,
      image: "http://dummyimage.com/300x300.png/ff4444/ffffff"
    };
    fixture.detectChanges();
    let element: HTMLElement = de.nativeElement.querySelector(".product__name");
    expect(element.textContent?.trim()).toEqual("Veal Inside - Provimi");
  });
});
