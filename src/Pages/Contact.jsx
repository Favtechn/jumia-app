import React from 'react'
import '../Css/Contact.css'
import { LuMessagesSquare } from "react-icons/lu";
<LuMessagesSquare />
import { MdOutlineMessage } from "react-icons/md";
const Contact = () => {
  return (
    <div class="tain">
      <br />
      <div class="container">
      <div class="text">
        <h1 class="make">NEED HELP?</h1>
      </div>
       <br />
         <div class="conl">
          <div class="no">
            <br /><br />
            <p class="para">if you have inquruiries or need assistance, do not hesitate to chat with us. We are available Monday to Sunday (8am to 8pm)</p>
            <li class='lis'><span class="noml"><MdOutlineMessage /></span>&nbsp;&nbsp;<a class="" href="#"><button type="button" class="warn ">CHAT WITH US</button></a></li>
            {/* <li><LuMessagesSquare /></li><span><button></button></span> */}
            <p>You can also reach us on <b>0201881106 </b> from Monday to Sunday (8am to 8pm)</p>
           </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><img class="mage" src="https://ng.jumia.is/cms/8-18/contact-us/customer-service-woman.png" alt="" /></div>
        </div>
      </div>  
    </div>
  )
}

export default Contact
