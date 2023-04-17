import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/productContext'
import './index.css'


const ItemPage = () => {

  const {setSelectedProduct, selectedProduct} = useContext(ProductContext)
  console.log(selectedProduct);

  useEffect(() => { 
  setSelectedProduct(selectedProduct)
  }, [])
  

  return (
    <section id="item-page">
        
    <div id='left' className='d-flex justify-content-center align-items-center'>
      <img className="img-fluid w-75" src={selectedProduct.imageURL} alt={selectedProduct.name}/>
    </div>

    <div id="right" className='align-middle'>

      <div className='w-75 mx-auto fs-5 d-grid gap-3'>
        <h1>{selectedProduct.name}</h1>
        <div>
          <div>${selectedProduct.price}</div>
          <span>(Tax not included)</span>
        </div>
        <div>{selectedProduct.description}</div>
        <div>{selectedProduct.quantity} left</div>

        <div className='text-center mt-4'>
          <button className='btn btn-primary btn-lg w-100'>BUY ONE</button>
        </div>
        <div className='d-flex gap-2 mt-3'>
          <button className='btn btn-success col-12 col-md-12 w-50 btn-lg'>Delete Item</button>
          <button className='btn btn-success col-12 col-md-12 w-50 btn-lg'>Edit Product</button>
        </div>
      
      </div>
    </div>

    </section>
  )
}

export default ItemPage