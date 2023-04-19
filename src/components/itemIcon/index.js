import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import './index.css'

const ItemIcon = ({product}) => {

  const {setSelectedProduct} = useContext(ProductContext)

  let navigate = useNavigate()

  const handleClick = () =>{
    console.log('Clicked');
    setSelectedProduct(product)
    navigate('/item')
    

  }

  return (
    <div id='itemBox' className='mx-4 mt-2 p-2 text-center' onClick={handleClick} >
      <h1 className='p-1 fs-5'>{product.name}</h1>
      <img id='img' src={product.imageURL}/>
      <div className='mt-3'>Price: {product.price}</div>
    </div>
  )
}

export default ItemIcon