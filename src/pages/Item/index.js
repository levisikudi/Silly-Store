import React, { useContext } from 'react'
import ItemForm from '../../components/itemForm'
import { ProductContext } from '../../context/productContext'


const ItemPage = () => {

  const {selectedProduct} = useContext(ProductContext)
  console.log(selectedProduct);

  return (
    <div>
        {selectedProduct.name}
    </div>
  )
}

export default ItemPage