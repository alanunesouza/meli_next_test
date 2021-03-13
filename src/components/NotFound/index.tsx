import React from 'react'

import styles from './index.module.css'

const NotFound = () => (
  <div className={styles.container} data-testid="not-found">
    <img className={styles.image} src="/images/not_found.svg" alt="not_found" />
    <div>
      <h1 className={styles.title}>Escriba en la búsqueda lo que desea encontrar.</h1>
      <ul>
        <li className={styles.information}>Ingrese su búsqueda en el campo que aparece en la parte superior de la página.</li>
        <li className={styles.information}>Examine la categoría de producto para encontrar el producto que busca.</li>
      </ul>
    </div>
  </div>
)

export default NotFound;
