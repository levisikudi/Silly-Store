import React from 'react'

const ItemIcon = ({product, handleClick}) => {


  return (
    <div onClick={handleClick}>{product.name}</div>
  )
}

export default ItemIcon