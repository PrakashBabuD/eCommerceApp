import { HttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { ProductsListComponent } from "./products-list.component";
import { Store } from "@ngrx/store";
import { initialState } from "./state/product.reducer";
import { ProductsService } from "./../core/services/products/products.service";
import { of } from "rxjs";
import { DebugElement } from "@angular/core";

describe("ProductsListComponent", () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let store: MockStore;
  let httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
  let listDebugElement: DebugElement;
  let productItem: HTMLElement;
  const MockProductService = {
    products$: of([
      {
        sku: "671695659-X",
        name: "Veal Inside - Provimi",
        price: 166,
        rrp: 223,
        image: "http://dummyimage.com/300x300.png/ff4444/ffffff"
      },
      {
        sku: "740799661-X",
        name: "Milk - Condensed",
        price: 165,
        rrp: 220,
        image: "http://dummyimage.com/300x300.png/cc0000/ffffff"
      }
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      providers: [
        {
          provide: ProductsService,
          useValue: MockProductService
        },
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    listDebugElement = fixture.debugElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render product items", () => {
    let productItems = listDebugElement.nativeElement.querySelectorAll("app-product");
    console.log("productItems", productItems);
    expect(productItems.length).toBe(2);
  });
});
