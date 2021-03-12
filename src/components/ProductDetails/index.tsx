import React from 'react'
import styles from './index.module.css'
import formatAmount from '@/helpers/formatAmount'
import { ProductItemDetail } from '@/types'

export default function ProductDetails({ product }: { product: ProductItemDetail }) {
  return (
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
            <div className={styles.containerPrice}>
              <span className={styles.price}>$ {formatAmount(product.price.amount)} </span>
              <span className={styles.priceDecimal}>
                {product.price.decimals && product.price.decimals < 2 ? `0${product.price.decimals}` : '00'}
              </span>
            </div>
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
}
