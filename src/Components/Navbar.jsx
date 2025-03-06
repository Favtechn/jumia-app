import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/navbar.css'
import { FiHelpCircle } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
           <nav class="navbar navbar-expand-lg bg-light navbar-">
  <div class="container-fluid">
    
     <a class="navbar-brand" href="https://www.jumia.com.ng/"><span class="vet">Jumia</span></a>
    <button className='to'   class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"></span>
    </button>
      <div class="con">
        <input type="search" class='for ' placeholder='Search products ,brands and categories' />
        <button class="find" type="submit">Search</button>
      </div>
    <div class="collapse navbar-collapse" id="navbarNav">
    {/* <nav class="navbar bg-body-tertiary" className="see">
  <div class="container-fluid" className='lonf'>
    <form class="d-flex" className="la"  role="search">
      <input class="form-control me-2" className="long" type="search" placeholder="Search products, brands and categories" aria-label="Search"/>
      <button class="btn btn-outline-success" clas type="submit">Search</button>
    </form>
  </div>
</nav> */}
      <ul class="navbar-nav ms-auto">        
      <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle "  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="nom"><VscAccount />&nbsp;&nbsp;Account</span>
              </a>
              <ul class="dropdown-menu">
                {/* <li><a class="dropdown-item" href="#">Action</a></li> */}
               <li class="beg"> <button type="button" className ="fort" style={{marginLeft:'-40px',marginTop:'-20px',width:'130px' , backgroundColor:'#F68B1E',fontWeight:'700', color:'white'}} class="btn btn-warning  ">SIGN IN</button></li>
               <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#"> <span class="nom"><VscAccount /></span>&nbsp;&nbsp; &nbsp;&nbsp;My Account</a></li>
                <li><a class="dropdown-item" href="#"> <span  class="nom"><BsCart3 /></span>&nbsp;&nbsp;&nbsp;&nbsp;Orders</a></li>
                <li><a class="dropdown-item" href="#"><span  class="nom"><BsCart3 /></span>&nbsp;&nbsp;&nbsp;&nbsp;Saved Items</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="nom"><FiHelpCircle />&nbsp;&nbsp;Help</span>
              </a>
              <ul class="dropdown-menu" >
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/">Help Center</a></li>
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/?page=place+an+order">Place an Order</a></li>
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/?page=pay+for+your+order">Payment Order</a></li>
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/?page=track+your+order">Track an Order</a></li>
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/?page=cancel+an+order">Cancel an order</a></li>
                <li><a class="dropdown-item" href="https://www.jumia.com.ng/contents/sp-help-center/?page=create+a+return">Returns & Refunds</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#"><button type="button" class="warn"><span class="nomll"><MdOutlineMessage />&nbsp;</span><b class=  "il">Live Chat</b></button></a></li>
              </ul>

            </li>
            <li class="nav-item"> 
         <Link to="/cart" class='nav-link' ><span class="nom"><BsCart3/> Cart</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
