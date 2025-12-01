// Libraries and assets

import React, { useState } from 'react'
import logo from '../assets/images/logos/logowhitetop.png'
import search from '../assets/images/logos/searchwhite.png'
import category from '../assets/images/logos/menuwhite.png'
import login from '../assets/images/logos/userwhite.png'
import Button from './button.jsx'
import Sidebar from './sidebar.jsx'
import '../assets/css/navbar.css'

import { Link } from 'react-router-dom'

// Return Function

function Navbar() {


  const sidebarState = ['block' , 'none']

  const [sidebarDefaultState , setSidebarState] = useState(sidebarState[1])


  const sidebarchanger = () => {
    console.log("Button Clicked")
    if(sidebarDefaultState === sidebarState[1]){
      setSidebarState(sidebarState[0])
    }else{
      
      setSidebarState(sidebarState[1])
    }
  }

  return (

    <div>

      <Sidebar displayOption={sidebarDefaultState}></Sidebar>
      
      <div id='navbar'>

        <div id="left">
          <button >
            <img src={category} alt="" srcset="" onClick={sidebarchanger}/>
          </button>
          <Link to="/">
            <img src={logo} alt="" srcset="" />
          </Link>
        </div>   

        <div id="mid">
          <Link to="/category/laptop">Laptop</Link>    
          <Link to="/category/network">Network</Link>    
          <Link to="/category/printer">Printer</Link>    
          <Link to="/category/monitor">Monitor</Link>    
          <Link to="/category/keyboard">Keyboard</Link>    
          <Link to="/category/mouse">Mouse</Link>    
          <Link to="/category/headset">Headset</Link>
        </div>

        <div id="right">
          <Link to="/login">
            <img src={login} alt="" srcset="" />
            <p>Login</p>
          </Link>
          <Link to="/signup">
            <img src={login} alt="" srcset="" />
            <p>SignUp</p>
          </Link>
        </div>

      </div>


    </div>

    )
}

export default Navbar