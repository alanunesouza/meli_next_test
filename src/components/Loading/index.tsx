import React from 'react'
import Loader from 'react-loader-spinner'

import styles from './index.module.css'

const Loading = () => (
  <div className={styles.loading}>
    <Loader
      type="Oval"
      color="#FFE600"
      height={70}
      width={70}
    />
  </div>
)

export default Loading;
