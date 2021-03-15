import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

import { http } from "@/helpers/http";
import { TYPE_SEARCH_PRODUCT_SUCCESS, TYPE_SEARCH_PRODUCT_FAILURE, TYPE_PRODUCT_DETAILS_SUCCESS, TYPE_PRODUCT_DETAILS_FAILURE, TYPE_SET_LOADING, TYPE_PRODUCT_DETAILS_REQUEST, TYPE_SEARCH_PRODUCT_REQUEST } from "./types-reducers";
import { ProductDetails, ProductList } from "@/types";

export const setLoading = (value: Boolean) => {
    return {
    type: TYPE_SET_LOADING,
    payload: value,
  };
}

export const searchProductsAction = (name: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  
  try {
    dispatch(searchProductsRequest());

    const url = `/items?search=${name}`;
    const payload: AxiosResponse<ProductList> = await http.get(url);

    dispatch(searchProductsSuccess(payload))
  } catch (error) {
    dispatch(searchProductsFailure(error))
  }
}

export function searchProductsRequest() {
  return {
    type: TYPE_SEARCH_PRODUCT_REQUEST
  };
}

export function searchProductsSuccess({ data }) {
  return {
    type: TYPE_SEARCH_PRODUCT_SUCCESS,
    payload: data,
  };
}

export function searchProductsFailure(error) {
  return {
    type: TYPE_SEARCH_PRODUCT_FAILURE,
    payload: error,
  };
}

export const productDetailsAction = (id: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  
  try {
    dispatch(productDetailsRequest());

    const url = `/items/${id}`;
    const payload: AxiosResponse<ProductDetails> = await http.get(url);

    dispatch(productDetailsSuccess(payload))
  } catch (error) {
    dispatch(productDetailsFailure(error))
  }
}

export function productDetailsRequest() {
  return {
    type: TYPE_PRODUCT_DETAILS_REQUEST
  };
}

export function productDetailsSuccess({ data }) {
  return {
    type: TYPE_PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
}

export function productDetailsFailure(error) {
  return {
    type: TYPE_PRODUCT_DETAILS_FAILURE,
    payload: error,
  };
}
