import React, { useState } from 'react'
import './index.css'
import { createItem } from '../../utilities/productUtilities'
import { useNavigate } from 'react-router-dom'

const ItemForm = () => {

  const [name, setName] = useState()
  const [quantity, setQuantity] = useState(0)
  const [imageURL, setImageURL] = useState()
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState()
  let nav = useNavigate()

  const handleClick = async (e) =>{
    e.preventDefault()
    if(!name || !imageURL || !description){
      
      alert('Please fill in all the fields')
      return
    }
    
    let formData = {
      name, imageURL, price, quantity, description
    }
    console.log(formData);

    try {
      let response = await createItem(formData)
      console.log(response);
      console.log("Product Created Successfully");
      
    } catch (error) {
      console.log("Couldn't create item");
    }

    nav('/')
  }

  return (
    <div className='container mt-5 w-50' >
      <form className="row g-3 needs-validation" novalidate>
        <div className="col-12 ">
          <label htmlFor="inputName" className="form-label">Product Name</label>
          <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} id="productName" required/>
        </div>
        <div className="col-12 ">
          <label htmlFor="inputURL" className="form-label">ImageURL</label>
          <input type="text" className="form-control" onChange={(e)=>setImageURL(e.target.value)} id="inputURL" required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="number" className="form-control" onChange={(e)=>setPrice(+(e.target.value))} id="price"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input type="number" className="form-control" onChange={(e)=>setQuantity(+(e.target.value))} id="quantity"/>
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product Decription</label>
          <textarea className="form-control" id="productDescription" onChange={(e)=>setDescription(e.target.value)} rows="3" required></textarea>
        </div>

        <div className='text-center'>
          <button className='btn btn-success' type='submit' onClick={(e)=>{handleClick(e)}}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ItemForm