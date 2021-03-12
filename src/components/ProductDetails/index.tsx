import React from 'react'
import styles from './index.module.css'

import { ProductItemDetail } from '@/types'
import Amount from '@/components/Amount'

const ProductDetails = ({ product }: { product: ProductItemDetail }) => (
  <>
    <div className={styles.containerProduct}>
      <a>
        <img className={styles.image} src={product.picture} alt={product.title} title={product.title} />
      </a>
      <div className={styles.subContainer}>
        <div className={styles.containerDetails}>
          <span className={styles.sold}>
            {product.condition} - {`${product.sold_quantity} vendidos`}
          </span>
          <a className={styles.title}>
            <span>{product.title}</span>
          </a>
          <Amount price={product.price} />
          <button type="button" className={styles.button}>Comprar</button>
        </div>
      </div>
    </div>

    <div className={styles.containerDescription}>
      <h1 className={styles.titleDescription}> Descripción del producto </h1>

      <p className={styles.description}>{product.description}</p>
    </div>
  </>
)

export default ProductDetails
