export type Author = {
  name: string;
  lastname: string;
};

export type Categories = string[];

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type ProductListItem = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state: string;
};

export type ProductItemDetail = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  sold_quantity: number;
  free_shipping: boolean;
  description: string;
};

export type ProductList = {
  author: Author;
  categories: string[];
  items: ProductListItem[];
};

export type ProductDetails = {
  author: Author;
  item: ProductItemDetail;
};

export type InitialState = {
  product: {
    loading: boolean;
    loadingProductDetails: boolean;
    productList: ProductListItem[];
    categories: string[];
    author: Author;
    productDetails: ProductItemDetail;
  }
};