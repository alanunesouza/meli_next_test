import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import styles from './index.module.css';

import { productDetailsAction } from '@/store/modules/product/actions'
import CategoriesBar from '@/components/CategoriesBar';
import ProductDetails from '@/components/ProductDetails';
import { useRouter } from 'next/router';
import { Categories, ProductItemDetail } from '@/types';
import Loading from '@/components/Loading';

interface ItemsIdProps {
  product: ProductItemDetail,
  categories: Categories,
  loadingProductDetails: Boolean,
  dispatch: any
}

const ItemsId = ({ product, categories, loadingProductDetails, dispatch }: ItemsIdProps) => {
  const router = useRouter();

  useEffect(() => {
    const id: any = router.query.id;
    
    setTimeout(() => {
      if (id && !product) {
        dispatch(productDetailsAction(id));
      }
    }, 5000)
  }, [router.query.id])

  if (loadingProductDetails) return <Loading />

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
  return store.dispatch(productDetailsAction(query.id));
}

const mapStateToProps = ({ dispatch, product }) => ({
  product: product.productDetails,
  categories: product.categories,
  loadingProductDetails: product.loadingProductDetails,
  dispatch,
});

export default connect(mapStateToProps)(ItemsId);