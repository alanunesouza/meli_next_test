import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import styles from './index.module.css';

import { productDetailsRequest } from '@/store/modules/product/actions'
import CategoriesBar from '@/components/CategoriesBar';
import ProductItem from '@/components/ProductItem';
import ProductDetails from '@/components/ProductDetails';
import { useRouter } from 'next/router';

const ItemsId = ({ product, categories }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      router.push(`/items/${router.query.id}`);
    }
  }, [router.query.id])

  return (
    <>
      {product && (
        <div className={styles.container}>
          <CategoriesBar categories={categories} />
          <div className={styles.productsContainer}>
            <ProductDetails product={product} />
          </div>
        </div>
      )}
    </>
  )
}

ItemsId.getInitialProps = ({ store, query }) => {
  return store.dispatch(productDetailsRequest(query.id));
}

const mapStateToProps = ({ product }) => ({
  product: product.productDetails,
  categories: product.categories,
});

export default connect(mapStateToProps)(ItemsId);