import React, { useContext } from 'react'
import { ProductContext } from '../../context/productContext'
import './index.css'


const ItemPage = () => {

  const {selectedProduct} = useContext(ProductContext)
  console.log(selectedProduct);

  return (
    <section id="item-page">
        
    <div id='left' className='d-flex justify-content-center align-items-center'>
      <img className="img-fluid w-75" src={selectedProduct.imageURL} alt={selectedProduct.name}/>
    </div>

    <div id="right">{selectedProduct.name}</div>

    </section>
  )
}

export default ItemPage