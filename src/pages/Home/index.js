import React from 'react'
import Footer from '../../components/footer'
import Banner from '../../components/headerBanner'
import Navbar from '../../components/navbar'
import ProductDisplay from '../../components/productDisplay'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ProductDisplay/>
      <Footer />
    </div>
  )
}

export default HomePage