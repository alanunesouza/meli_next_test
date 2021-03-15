import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import styles from './index.module.css'

import { searchProductsAction, setLoading } from '@/store/modules/product/actions'
import CategoriesBar from '@/components/CategoriesBar';
import ProductItem from '@/components/ProductItem';
import { useRouter } from 'next/router'
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';
import { Categories, ProductListItem } from '@/types';

interface ItemsProps {
  productList: ProductListItem[],
  categories: Categories,
  loading: boolean,
  dispatch: any
};

const Items = ({ productList, categories, loading, dispatch }: ItemsProps) => {
  const router = useRouter();

  useEffect(() => {
    const search: any = router.query.search;

    setTimeout(() => {
      if (search && !productList.length) {
        dispatch(searchProductsAction(search))
      }
    }, 5000);
  }, [router.query.search])

  useEffect(() => {
    return () => dispatch(setLoading(false));
  }, [])

  if (loading) return <Loading />

  return (
    <>
      {!!productList.length ? (
        <div className={styles.container}>
          <CategoriesBar categories={categories} />
          <div className={styles.productsContainer}>
            {productList.map(item => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )

}

Items.getInitialProps = ({ store, query: { search } }) => {
  return search ? store.dispatch(searchProductsAction(search)) : {};
}

const mapStateToProps = ({ product, dispatch }) => ({
  productList: product.productList,
  categories: product.categories,
  author: product.author,
  loading: product.loading,
  dispatch
});

export default connect(mapStateToProps)(Items);