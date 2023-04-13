import React, { useEffect, useState } from 'react'
import { getProducts } from '../../utilities/productUtilities'
import ItemIcon from '../itemIcon'

const ProductDisplay = () => {

  const [products, setProducts] = useState([])

  const renderProducts = async () => {

    let productArray = await getProducts()
    console.log(productArray);
    setProducts(productArray)
  }
  
  useEffect(() => {
    renderProducts()
  }, [])

  

  let productsJSX = products.map((product) =>{
    if (product){
      return(
        
      <div key={product._id}>
        <ItemIcon product={product}/>
      </div>
      )
    }
  })



  return (
    <div>
        <>{productsJSX}</>
    </div>
  )
}

export default ProductDisplay