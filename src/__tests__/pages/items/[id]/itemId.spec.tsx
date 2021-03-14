import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { screen, render } from '@testing-library/react';

import { makeMockStore } from '@/helpers/make-mock-store';
import { stateProductDetailsMock } from '@/helpers/mocks';

import Items from '../../../../pages/items/[id]/index';

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

describe('Item Details Page', () => {
  const store = stateProductDetailsMock();

  it('should if show Loading component if loading is true', async () => {
    renderWithRedux({ ...store, product: { ...store.product, loadingProductDetails: true } });

    const loading = screen.getByTestId('loading');

    expect(loading).toBeTruthy();
  });

  it('should show ProductDetails component', () => {
    renderWithRedux(store);

    const productDetailsComponent = screen.getAllByTestId("product-details");

    expect(productDetailsComponent).toBeTruthy();
  });

   it('should product correctly', () => {
    renderWithRedux(store);

    const { product } = store;

    const productImages = screen.getAllByTestId("product-img");
    const productAmounts = screen.getAllByTestId("product-amount");
    const productDetails = screen.getByTestId("product-details");
    const description = screen.getByTestId("product-description");

    
    
    expect(productImages).toBeTruthy();
    expect(productAmounts).toBeTruthy();
    expect(productDetails).toHaveTextContent(product.productDetails.title);
    expect(description).toHaveTextContent(product.productDetails.description);
  });
});
