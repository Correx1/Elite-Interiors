import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/navbar.css"


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="Light offcanvas navbar ">
        <div className="container-fluid mx-4">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                   <span className="fa fa-bars"></span></button>
            <Link to={"/"} className="navbar-brand d-flex">
                <img src="/images/logo.png" alt="" width="50" height="50" className="mx-1" />
                <h4>Elites Interior</h4>
            </Link>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight"
                aria-labelledby="offcanvasNavbarLightLabel">
                <div className="offcanvas-header">
                              <Link to={"/Home"} className="navbar-brand d-flex " >
                <img src="images/logo.png" alt="" width="50" height="50" className="mx-1" />
                <h4>Elites Interior</h4>
            </Link>
                </div>
                <div className="offcanvas-body text-center">
                          <ul className="navbar-nav">
                              <li className="nav-item"><Link className='nav-link active' to={"/"}> Home </Link></li>
                              <li className="nav-item"><Link className='nav-link ' to={"/Living" }>Living Room</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/Bedroom" }>Bedroom</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/Wardrobe" }>Wardrobe</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/Kitchen" }>Kitchen</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/Bathroom"}>Bathroom</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/Ceilings"}>Ceilings</Link></li>  
                              <li className="nav-item"><Link className='nav-link ' to={"/Partition"}>Partition Walls</Link></li> 
                              <li className="nav-item"><Link className='nav-link ' to={"/tv"}>Tv Unit</Link></li>   
                              <li className="nav-item"><Link className='nav-link ' to={"/shelves"}>Shelves</Link></li>   
                    </ul>
                    <div className=" ms-auto">
                        <button className="btnn"><a href="#contact">Contact</a>  </button>
                    </div>
                </div>
                  </div>
                  </div>
    </nav>
    </div>
  );
}

export default Navbar
