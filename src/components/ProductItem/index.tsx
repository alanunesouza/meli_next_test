import React from 'react'
import { useRouter } from 'next/router'

import formatAmount from '@/helpers/formatAmount';
import { ProductListItem } from '@/types';
import styles from './index.module.css'

function ProductItem({ product }: { product: ProductListItem }) {
  const router = useRouter();

  const handleProductDetails = id => router.push(`/items/${id}`);

  return (
    <div className={styles.container}>
      <a onClick={() => handleProductDetails(product.id)}>
        <img className={styles.image} src={product.picture} alt={product.title} title={product.title} />
      </a>
      <div className={styles.subContainer}>
        <div className={styles.containerDetails}>
          <div className={styles.containerPrice}>
            <span className={styles.price}>$ {formatAmount(product.price.amount)} </span>
            <span className={styles.priceDecimal}>
              {product.price.decimals && product.price.decimals < 2 ? `0${product.price.decimals}` : '00'}
            </span>
            {product.free_shipping && <img className={styles.freeShipping} src="/images/ic_shipping@2x.png" alt="free_shipping" />}
          </div>
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
