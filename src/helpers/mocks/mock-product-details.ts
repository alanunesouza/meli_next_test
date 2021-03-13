import faker from 'faker';

import { InitialState, ProductDetails, ProductItemDetail, ProductListItem } from '@/types';

export const productItemDetailsMock = (): ProductItemDetail => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  price: {
    currency: faker.finance.currencyCode(),
    amount: 9999,
    decimals: 9,
  },
  condition: faker.random.word(),
  sold_quantity: faker.random.number(),
  picture: faker.internet.url(),
  description: faker.commerce.productDescription(),
  free_shipping: faker.random.boolean(),
});

export const mockProductDetails = (): ProductDetails => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  item: productItemDetailsMock(),
});

export const stateProductDetailsMock = (): InitialState => ({
  product: {
    loading: false,
    loadingProductDetails: false,
    productList: [],
    categories: [],
    author:  mockProductDetails().author,
    productDetails: mockProductDetails().item,
  }
});
