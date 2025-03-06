import React from 'react'
import '../Css/card.css'
// import { MdOutlineMessage } from "react-icons/md";

const Card = () => {
  return (
    
    <div class="co">
      <div class="beg">
           
        <p class="jum">Jumia</p>
        <div class="vol">
        <span class="ye">NEW TO JUMIA?</span>
        <p>Subscribe to our newsletter to get updates on our latest offers!</p>  
       
        <input type="text" class="in" placeholder="Enter Email"  /> <button class="pus"><span class="sam">Male</span></button>&nbsp; <button class="push"><span class="same">Female</span></button>
        </div>  
        <input class="pu" type="checkbox" /> <span class='up'>I have agree to jumia's Privacy and Cookie Policy.You can unsurbibe anytime from newsletter at any time.</span><br />
        <span class='upl'>I accept the Legal Terms.</span>
        
     </div>
    </div>
   
    
  )

}

export default Card
