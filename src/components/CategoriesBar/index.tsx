import { Categories } from '@/types';
import React from 'react'
import styles from './index.module.css';

const CategoriesBar = ({ categories }: { categories: Categories }) => (
  <div data-testid="categories" className={styles.container}>
    {categories.map(category => (
      <a key={category}>{category}</a>
    ))}
  </div>
);

export default CategoriesBar;