import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/helpers';
import { stateProductListMock } from '@/helpers/mocks';

import Items from '../../../pages/items/index';

const renderWithRedux = (store) => {
  const router: any = {
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
  };

  render(
    <Provider store={makeMockStore(store)}>
      <RouterContext.Provider value={router}>
        <Items />
      </RouterContext.Provider>
    </Provider>
  );
};

describe('Items Page', () => {
  const store = stateProductListMock();

  it('should if show Loading component if loading is true', async () => {
    renderWithRedux({ ...store, product: { ...store.product, loading: true } });

    const loading = screen.getByTestId('loading');

    expect(loading).toBeTruthy();
  });

  it('should show 4 products', () => {
    renderWithRedux(store);

    const productItemComponent = screen.getAllByTestId("product-item");

    expect(productItemComponent).toHaveLength(4);
  });

  it('should show product not found - component NotFound', () => {
    renderWithRedux({ ...store, product: { ...store.product, loading: false, productList: [] }});

    const notFound = screen.getByTestId('not-found');

    expect(notFound).toBeTruthy();
  });

   it('should list the products correctly', () => {
    renderWithRedux(store);

    const { product } = store;

    const productImages = screen.getAllByTestId("product-img");
    const productAmounts = screen.getAllByTestId("product-amount");
    const productListItem = screen.getAllByTestId("product-item");

    
    
    expect(productImages).toBeTruthy();
    expect(productAmounts).toBeTruthy();
    expect(productListItem[0]).toHaveTextContent(product.productList[0].title);
    expect(productListItem[0]).toHaveTextContent(product.productList[0].state);
  });

  it('should list the correct categories', () => {
    renderWithRedux(store);
    
    const { product } = store;

    const categories = screen.getByTestId("categories");

    expect(categories).toHaveTextContent(product.categories[0]);
    expect(categories).toHaveTextContent(product.categories[1]);
    expect(categories).toHaveTextContent(product.categories[2]);
    expect(categories).toHaveTextContent(product.categories[3]);
  });
});
