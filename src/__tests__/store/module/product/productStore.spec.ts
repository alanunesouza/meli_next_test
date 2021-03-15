import faker from 'faker';

import {
  product as reducer,
  INITIAL_STATE as initialState,
} from '@/store/modules/product/reducer';
import { TYPE_PRODUCT_DETAILS_FAILURE, TYPE_PRODUCT_DETAILS_REQUEST, TYPE_PRODUCT_DETAILS_SUCCESS, TYPE_SEARCH_PRODUCT_FAILURE, TYPE_SEARCH_PRODUCT_REQUEST, TYPE_SEARCH_PRODUCT_SUCCESS, TYPE_SET_LOADING } from '@/store/modules/product/types-reducers';

jest.mock('@/store/modules/product/actions');

type mockAction<T> = {
  type: string;
  payload: T;
};

describe('Product Store', () => {
  let INITIAL_STATE;

  describe('Testing Reducers', () => {
    beforeEach(() => {
      INITIAL_STATE = { ...initialState };
    });

    it('should return INITIAL_STATE when type not exist in reducer', () => {
      const action: mockAction<any> = {
        type: 'TEST_NOT_EXIST',
        payload: faker.random.objectElement(),
      };
      const result = reducer(undefined, action);
      const expected = INITIAL_STATE;

      expect(result).toEqual(expected);
    });

    it('should return loading=true when TYPE_SET_LOADING = true', () => {
      const action: mockAction<any> = {
        type: TYPE_SET_LOADING,
        payload: true,
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: true,
      };

      expect(result).toEqual(expected);
    });

    it('should return loading=false when TYPE_SET_LOADING = false', () => {
      const action: mockAction<any> = {
        type: TYPE_SET_LOADING,
        payload: false,
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: false,
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_SEARCH_PRODUCT_REQUEST', () => {
      const action: mockAction<any> = {
        type: TYPE_SEARCH_PRODUCT_REQUEST,
        payload: null
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: true,
        loadingProductDetails: true
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_SEARCH_PRODUCT_SUCCESS', () => {
      const action: mockAction<any> = {
        type: TYPE_SEARCH_PRODUCT_SUCCESS,
        payload: {
          items: faker.random.objectElement(),
          categories: faker.random.objectElement(),
          author: faker.random.objectElement(),
        }
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: false,
        productList: action.payload.items,
        categories: action.payload.categories,
        author: action.payload.author
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_SEARCH_PRODUCT_FAILURE', () => {
      const action: mockAction<any> = {
        type: TYPE_SEARCH_PRODUCT_FAILURE,
        payload: null
      };

      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: false,
        productList: INITIAL_STATE.productList,
        categories: INITIAL_STATE.categories,
        author: INITIAL_STATE.author
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_PRODUCT_DETAILS_REQUEST', () => {
      const action: mockAction<any> = {
        type: TYPE_PRODUCT_DETAILS_REQUEST,
        payload: null
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loading: true,
        loadingProductDetails: true,
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_PRODUCT_DETAILS_SUCCESS', () => {
      const action: mockAction<any> = {
        type: TYPE_PRODUCT_DETAILS_SUCCESS,
        payload: {
          item: faker.random.objectElement(),
          author: faker.random.objectElement(),
        }
      };
      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        productDetails: action.payload.item,
        author: action.payload.author,
        loadingProductDetails: false,
      };

      expect(result).toEqual(expected);
    });

    it('should return state correctly when call TYPE_PRODUCT_DETAILS_FAILURE', () => {
      const action: mockAction<any> = {
        type: TYPE_PRODUCT_DETAILS_FAILURE,
        payload: null
      };

      const result = reducer(undefined, action);
      const expected = {
        ...INITIAL_STATE,
        loadingProductDetails: false,
        productDetails: INITIAL_STATE.productDetails,
        author: INITIAL_STATE.author
      };

      expect(result).toEqual(expected);
    });
  });
});
