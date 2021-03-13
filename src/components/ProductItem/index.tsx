import React from 'react'
import { useRouter } from 'next/router'

import { ProductListItem } from '@/types';
import styles from './index.module.css'
import Amount from '../Amount';

function ProductItem({ product }: { product: ProductListItem }) {
  const router = useRouter();

  const handleProductDetails = id => router.push(`/items/${id}`);

  return (
    <div data-testid="product-item" className={styles.container}>
      <a onClick={() => handleProductDetails(product.id)}>
        <img data-testid="product-img" className={styles.image} src={product.picture} alt={product.title} title={product.title} />
      </a>
      <div className={styles.subContainer}>
        <div className={styles.containerDetails}>
          <Amount price={product.price} />
          <a className={styles.title} onClick={() => handleProductDetails(product.id)}>
            <span>{product.title}</span>
          </a>
        </div>
        <div className={styles.containerLocation}>
          <span>{product.state}</span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
