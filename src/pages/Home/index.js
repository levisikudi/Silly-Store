import React from 'react'
import Footer from '../../components/footer'
import Banner from '../../components/headerBanner'
import ProductDisplay from '../../components/productDisplay'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductDisplay/>
      <Footer />
    </div>
  )
}

export default HomePage