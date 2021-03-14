import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'

export default function Header() {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const handleChange = useCallback((value) => {
    setInputValue(value);
  }, [])
  
  const handleSearch = useCallback((e) => {
    e.preventDefault();

    if (!!inputValue.length) {
      router.push(`/items?search=${inputValue}`);
    }
    
  }, [inputValue]);

  return (
    <header data-testid="header" className={styles.container}>
      <form className={styles.form} data-testid="search-form" onSubmit={handleSearch}>
        <img src="/images/Logo_ML_2x.png" alt="logo_meli" onClick={() => router.push('/')}/>
        <input data-testid="input-bar" name="bar" type="text" className={styles.inputBar} placeholder="Nunca desejes de buscar" value={inputValue} onChange={(e) => handleChange(e.target.value)} />
        <button className={styles.buttonSearch} onClick={handleSearch} type="submit">
          <img src="/images/ic_Search_2x.png" alt="button_search" />
        </button>
      </form>
    </header>
  )
}
