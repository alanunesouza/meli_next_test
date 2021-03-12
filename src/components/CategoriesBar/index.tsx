import { Categories } from '@/types';
import React from 'react'
import styles from './index.module.css';

export default function CategoriesBar({ categories }: { categories: Categories }) {
  return (
    
    <div className={styles.container}>
      {categories.map(category => (
        <a key={category}>{category}</a>
      ))}
    </div>

  )
}
