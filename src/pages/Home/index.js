import React from 'react'
import Banner from '../../components/headerBanner'
import ProductDisplay from '../../components/productDisplay'
import './index.css'

const HomePage = () => {
  return (
    <div id='home-page'>
      <Banner />
      <ProductDisplay/>
    </div>
  )
}

export default HomePage