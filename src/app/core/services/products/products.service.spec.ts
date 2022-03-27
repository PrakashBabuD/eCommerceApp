import { TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { initialState } from "src/app/products/state/product.reducer";
import { ProductsService } from "./products.service";
import { HttpClient } from "@angular/common/http";

describe("ProductsService", () => {
  let service: ProductsService;
  let store: MockStore;
  let httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        provideMockStore({ initialState }),
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
