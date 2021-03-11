import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import styles from './index.module.css'

import { searchProductsRequest } from '@/store/modules/product/actions'
import CategoriesBar from '@/components/CategoriesBar';
import ProductItem from '@/components/ProductItem';
import { useRouter } from 'next/router'
import Loading from '@/components/Loading';
import NotFound from '@/components/NotFound';

const Items = ({ listProducts, categories, loading }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.search) {
      router.push(`/items?search=${router.query.search}`);
    }
  }, [router.query.search])

  if (loading) return <Loading />

  return (
    <>
      {!!listProducts.length ? (
        <div className={styles.container}>
          <CategoriesBar categories={categories} />
          <div className={styles.productsContainer}>
            {listProducts.map(item => (
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
  return search ? store.dispatch(searchProductsRequest(search)) : {};
}

const mapStateToProps = ({ search, product }) => ({
  listProducts: product.listProducts,
  categories: product.categories,
  author: product.author,
  loading: product.loading,
});

export default connect(mapStateToProps)(Items);