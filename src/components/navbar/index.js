import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavSearch from '../navSearch';


const Navbar = () => {

  const location = useLocation().pathname;

  return (
    <div>
      <nav id="navbar" className="navbar w-100 navbar-expand-md sticky-top navbar-dark bg-black  ">
        <div className="container ">
            <div id='logo' className="navbar-brand d-flex r">
              <p className='d-flex align-self-center'>Silly</p>  
            </div>

            <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#expandation">
                <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="expandation">
                <ul className="navbar-nav navbar-nav-scroll">

                  <li className="nav-item mx-4">
                    <Link to ='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link to ="/create" className="nav-link">Create Item</Link>
                  </li>

                    {!location === '/' ?
                        
                  <li className="nav-item mx-4">
                    <NavSearch />
                  </li>
                    :
                    <>
                    </>
                    }

                </ul> 
            </div>       
        </div>
    </nav>
    </div>
  )
}

export default Navbar