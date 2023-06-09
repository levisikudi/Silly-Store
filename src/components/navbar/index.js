import React from 'react'
import { Link } from 'react-router-dom'
import NavSearch from '../navSearch';


const Navbar = () => {


  return (
    <div>
      <nav id="navbar" className="navbar w-100 navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div id='logo' className="navbar-brand d-flex"> 
              <Link to ="/" className="nav-link">Silly</Link>
            </div>

            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">

                  <li className="nav-item mx-4">
                    <NavSearch/>
                  </li>
                  <li className="nav-item mx-4">
                    <Link to ='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link to ="/create" className="nav-link">Create Item</Link>
                  </li>   

                </ul> 
            </div>       
        </div>
    </nav>
    </div>
  )
}

export default Navbar