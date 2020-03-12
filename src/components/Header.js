import React from "react"
import logo from "./img/treble.jpg"

class Header extends React.Component{
   render(){
       return(
        <header>
        <div className="container">       
            <div id ="logo">
                <a id="homelogo" href="index.html"> <img src={"https://clipartart.com/images/clipart-logos-download-6.jpg"} width="50px" height="50px"></img></a>
            </div>
           {/* <nav>
                <ul id ="navlist">
                    <li><a href="index.html">Home</a> </li>
                    <li><a href="signup.html">Sign Up</a> </li>
                    <li><a href="#">Help</a> </li>
                </ul>
           </nav>*/}
        </div>
    </header>

       )
   }
}

export default Header