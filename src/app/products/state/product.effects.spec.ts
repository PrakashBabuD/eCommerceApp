import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";
import { ProductsService } from "src/app/core/services/products/products.service";
import { MockProvider } from "ng-mocks";
import { ProductEffects } from "./product.effects";

describe("ProductEffects", () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEffects, provideMockActions(() => actions$), MockProvider(ProductsService)]
    });

    effects = TestBed.inject(ProductEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
