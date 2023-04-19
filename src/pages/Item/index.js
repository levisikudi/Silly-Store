import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/productContext'
import './index.css'
import { buyOne } from '../../utilities/productUtilities'


const ItemPage = () => {

  const {setSelectedProduct, selectedProduct} = useContext(ProductContext)
  console.log(selectedProduct);

  useEffect(() => { 
    console.log("Reload");
  setSelectedProduct(selectedProduct)
  }, [])
  
  const handleBuyClick = async (e) =>{
    console.log("buy");
    try {
      let quantity = selectedProduct.quantity - 1
      console.log(quantity);
      let id = selectedProduct._id
      let response = await buyOne(quantity, id )
      console.log(response);
      console.log("bought one");
    } catch (error) {
      console.log("Couldn't buy one product");
    }
    
    setSelectedProduct(selectedProduct)
  }

  const handleDeleteClick = (e) =>{
    console.log("delete");
  }

  const handleEditClick = (e) =>{
    console.log("edit");
  }
  return (
    <section id="item-page">
        
    <div id='left' className='d-flex justify-content-center align-items-center'>
      <img className="img-fluid w-75" src={selectedProduct.imageURL} alt={selectedProduct.name}/>
    </div>

    <div id="right" className='align-middle'>

      <div className='w-75 mx-auto fs-5 fw-light d-grid gap-3'>
        <h1 className='fst-italic'>{selectedProduct.name}</h1>
        <div>
          <div>${selectedProduct.price}</div>
          <span>(Tax not included)</span>
        </div>
        <div>{selectedProduct.description}</div>
        {selectedProduct.quantity?  
        <div>{selectedProduct.quantity} left</div>
      :
      <></>
      }

        <div className='text-center mt-4'>
          <button className='btn btn-primary btn-lg w-100'
          disabled={selectedProduct.quantity? false : true}
          onClick={(e)=>handleBuyClick(e)}
          >{selectedProduct.quantity? "BUY ONE" : "OUT OF STOCK"}</button>
        </div>
        <div className='d-flex gap-2 mt-3'>
          <button className='btn btn-success col-12 col-md-12 w-50 btn-lg'
             onClick={(e)=>handleDeleteClick(e)}
             >Delete Item</button>
          <button className='btn btn-success col-12 col-md-12 w-50 btn-lg'
              onClick={(e)=>handleEditClick(e)}
              >Edit Product</button>
        </div>
      
      </div>
    </div>

    </section>
  )
}

export default ItemPage