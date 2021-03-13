import faker from 'faker';


import { InitialState, ProductList, ProductListItem } from '@/types';

export const productListItemMock = (): ProductListItem => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  price: {
    currency: faker.finance.currencyCode(),
    amount: 99,
    decimals: 9,
  },
  condition: faker.random.word(),
  picture: faker.internet.url(),
  free_shipping: faker.random.boolean(),
  state: faker.address.state(),
});

export const productListMock = (): ProductList => ({
  author: {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
  },
  items: [productListItemMock(), productListItemMock(), productListItemMock(), productListItemMock()],
  categories: [faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word()],
});

export const stateProductListMock = (): InitialState => ({
  product: {
    loading: false,
    loadingProductDetails: true,
    productList: productListMock().items,
    categories: productListMock().categories,
    author: productListMock().author,
    productDetails: null,
  }
});
