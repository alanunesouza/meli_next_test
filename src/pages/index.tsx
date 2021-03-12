import React from 'react'
import { connect } from 'react-redux';
import Loading from '@/components/Loading';
import styles from './index.module.css'


function Home({ loading }) {

  if (loading) return <Loading />;


  return (
    <div className={styles.container} />
  )
}

const mapStateToProps = ({ product }) => ({
  loading: product.loading,
});

export default connect(mapStateToProps)(Home);