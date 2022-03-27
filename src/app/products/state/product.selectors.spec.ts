import * as fromProduct from "./product.reducer";
import { selectProducts, selectProductState } from "./product.selectors";

describe("Product Selectors", () => {
  it("should select the feature state", () => {
    const state = {
      [fromProduct.productFeatureKey]: {
        entities: [],
        hasLoaded: true
      }
    };
    const result = selectProductState(state);

    expect(result).toBe(state[fromProduct.productFeatureKey]);
  });

  it("should select the product entities", () => {
    const state = {
      [fromProduct.productFeatureKey]: {
        entities: [
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
        ],
        hasLoaded: true
      }
    };
    const result = selectProducts(state);

    expect(result).toBe(state[fromProduct.productFeatureKey]["entities"]);
  });
});
