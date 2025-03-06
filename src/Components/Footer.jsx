import React from 'react'
import '../Css/Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { RiYoutubeFill } from "react-icons/ri";
import { ImInstagram } from "react-icons/im";
import { FiTwitter } from "react-icons/fi";
import '../Css/Contact.css'
import {Link} from 'react-router-dom'
import { FaCcMastercard } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { PiIntersectDuotone } from "react-icons/pi";

import { FaDhl } from "react-icons/fa6";

const Footer = () => {
  return (
    <div >
    <div  class="ok">
      <div class="container">
        <div className=''>
          <br  /><br />
      <ul  class="list-unstyled ">
           
          <li class="re"><a >Need Help?</a></li><br />
          <li><a>Chat with us</a></li>
          <Link to="/contact" class="nav-link">Contact Us</Link> 
          <li><a>Help Center</a></li><br />
          <li class="re"><a>Useful Links</a></li><br />
          <li><a>Service Center</a></li>
          <li><a>How to shop on jumia</a></li>
          <li><a>Delivery options and timeliness</a></li>
          <li><a>How to return products on jumia?</a></li>
          <li><a>Corporate and bulk purchases</a></li>
          <li><a>Report a Products</a></li>
          <li><a>Disputes Resolution Policy</a></li>
          <li><a>Returns Policy</a></li><br /><br  />
          <li class="re"><a>Join Us On</a></li><br class="bd" />
          <li ><a><span class="nomll"><a class="nomll" href="https://www.facebook.com/jumia.com.ng/"><FaFacebookF/></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomll"><a class="nomll" href="https://www.youtube.com/c/JumiaNigeriaNG"><RiYoutubeFill/></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span  class="nomll"><a class="nomll" href="https://www.instagram.com/jumianigeria/"><ImInstagram /></a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomll"><a class="nomll" href="https://twitter.com/JumiaNGHelp"><FiTwitter /></a></span></a></li><br class="bd" /><br class="bd"  /><br /><br />
      </ul>
      </div>
      
      <ul class="list-unstyled" >
          <li class="re"><a>About Jumia</a></li><br />
          <li><a>About Us</a></li>
          <li><a>jumia Careers</a></li>
          <li><a>Scholarship</a></li>
          <li><a>Branches</a></li>
          <li><a>Affilate</a></li>
          <li><a>Programs</a></li>
          <li><a>Scholarship</a></li>
          <li><a>Branches</a></li>
          <li><a>Affilate</a></li>
          <li><a>Programs</a></li>
          <li><a>Scholarship</a></li>
          <li><a>Branches</a></li><br /><br />
          <li class="font"><a>Payment Methods & delivery Partners</a></li>
          
          <li><a><span class="nomll"><FaCcMastercard /></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomll"><FaAmazonPay /></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomll"><SiVisa /></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomll"><PiIntersectDuotone /></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nomlll"><FaDhl /></span></a></li>
      </ul>
      <br class="bd" /><br class="bd" /><br /><br />
      <ul  class="list-unstyled" >
          <li class="re"><a>Make money with Jumia</a></li><br />
          <li><a>Sell on Jumia</a></li>
          <li><a>Vendor hub</a></li>
          <li><a>Become a Sales Consultants</a></li>
          <li><a>Become a Logistics Parther</a></li>
          <li><a>join the Logistics Service Parthner</a></li>
          <li><a>Join the jumia Academy</a></li>
          <li><a>Join the jumia Academy</a></li>
      </ul><br class="bd" /><br class="bd" /><br class="bd"  /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <ul  class="list-unstyled" >
          <li class="re"><a>Jumia international</a></li><br />
          <div class='coll'>
          <li><a>Algeria</a></li>
          <li><a>Egppt</a></li>
          <li><a> Ghana</a></li>
          <li><a>ivory Coast </a></li>
          <li><a>Kenya</a></li>
          <li><a>Morocco</a></li>
          <li><a> Senegal</a></li>
          <li><a>Tunisia </a></li>
          <li><a>Uganda </a></li>
          <li><a>Zando</a></li>
          </div>
          
      </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer
