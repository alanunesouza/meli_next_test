import React, { useMemo } from 'react'
import { Price } from '@/types'

import styles from './index.module.css'
import { useRouter } from 'next/router';

export default function Amount({ price }: { price: Price }) {
  const { pathname } = useRouter()

  const memoizedAmount = useMemo<string>(() => price.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'), [price.amount]);

  return (
    <div className={styles.containerPrice}>
      <span className={pathname == "/items" ? `${styles.price} ${styles.minorPrice}` : styles.price}>$ {memoizedAmount} </span>
      <span className={styles.priceDecimal}>
        {price.decimals && price.decimals < 2 ? `0${price.decimals}` : '00'}
      </span>
    </div>
  )
}
