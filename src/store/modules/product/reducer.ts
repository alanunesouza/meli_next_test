import { TYPE_PRODUCT_DETAILS_FAILURE, TYPE_PRODUCT_DETAILS_REQUEST, TYPE_PRODUCT_DETAILS_SUCCESS, TYPE_SEARCH_PRODUCT_FAILURE, TYPE_SEARCH_PRODUCT_REQUEST, TYPE_SEARCH_PRODUCT_SUCCESS, TYPE_SET_LOADING } from "@/store/modules/product/types-reducers";
import produce from "immer";

export const INITIAL_STATE = {
  loading: true,
  loadingProductDetails: true,
  productList: [],
  categories: [],
  author: null,
  productDetails: null,
};

export function product(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPE_SET_LOADING: {
        draft.loading = action.payload;
        break;
      }
      case TYPE_SEARCH_PRODUCT_REQUEST: {
        draft.loading = true;
        break;
      }
      case TYPE_SEARCH_PRODUCT_SUCCESS: {
        draft.productList = action.payload.items;
        draft.categories = action.payload.categories;
        draft.author = action.payload.author;
        draft.loading = false;
        break;
      }
      case TYPE_SEARCH_PRODUCT_FAILURE: {
        draft.productList = INITIAL_STATE.productList;
        draft.categories = INITIAL_STATE.categories;
        draft.author = INITIAL_STATE.author;
        draft.loading = false;
        break;
      }
      case TYPE_PRODUCT_DETAILS_REQUEST: {
        draft.loadingProductDetails = true;
        break;
      }
      case TYPE_PRODUCT_DETAILS_SUCCESS: {
        draft.productDetails = action.payload.item;
        draft.loadingProductDetails = false;
        break;
      }
      case TYPE_PRODUCT_DETAILS_FAILURE: {
        draft.productDetails = INITIAL_STATE.productDetails;
        draft.loadingProductDetails = false;
        break;
      }
      default:
    }
  });
}
