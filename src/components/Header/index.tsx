import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.css'
// import debounce from '@/helpers/debounce';


export default function Header() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleChange = (value) => {
    setInputValue(value);
  }

  // const debounceOnSearch = debounce((value: string) => {
  //   router.push(`/items?search=${value}`);
  // }, 1000);
  
  const handleSearch = (e) => {
    e.preventDefault();

    if (!!inputValue.length) {
      router.push(`/items?search=${inputValue}`);
    }
  };

  return (
    <header className={styles.container}>
      <form className={styles.form} data-testid="search-form" onSubmit={handleSearch}>
        <img src="/images/Logo_ML_2x.png" alt="logo_meli" onClick={() => router.push('/')}/>
        <input name="bar" type="text" className={styles.inputBar} placeholder="Nunca desejes de buscar" value={inputValue} onChange={(e) => handleChange(e.target.value)} />
        <button className={styles.buttonSearch} onClick={handleSearch} type="submit">
          <img src="/images/ic_Search_2x.png" alt="search" />
        </button>
      </form>
    </header>
  )
}
