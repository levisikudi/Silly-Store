import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';

const ItemIcon = ({product}) => {

  const {setSelectedProduct} = useContext(ProductContext)

  let navigate = useNavigate()

  const handleClick = () =>{
    console.log('Clicked');
    setSelectedProduct(product)
    navigate('/item')
    

  }

  return (
    <div onClick={handleClick}>{product.name}</div>
  )
}

export default ItemIcon