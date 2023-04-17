import React from 'react'

const NavSearch = () => {

  const handleChange = (e) =>{
   console.log(e);
  }

  return (
    <>
      <div className="input-group px-5">
        <input type="text" className="form-control " 
        placeholder="Search" aria-label="search" 
        onChange={(e)=>handleChange(e.target.value)}
        aria-describedby="search"/>
        <button className='btn btn-light'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  )
}

export default NavSearch