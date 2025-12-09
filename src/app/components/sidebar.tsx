import React from 'react'
import logo from '../assets/images/logos/logowhitetop.png'
import "../assets/css/sidebar.css"
import category from '../assets/images/logos/menu.png'
import { useRef , useState } from 'react'





function Sidebar({displayOption}) {

    return (

    <div id='sidebar' style={{display:displayOption}}>


        <div id="top">
            {/* <h1>Menu</h1> */}
        </div>

        <div id="mid">
            <h1>Categories</h1>

            <div id="links">
                <a href="/laptop">Laptop</a>
                <a href="/desktop">Desktop</a>
                <a href="/monitor">Monitor</a>
                <a href="/keyboard">Keyboard</a>
                <a href="/mouse">Mouse</a>
                <a href="/speaker">Speaker</a>
                <a href="/headset">Headset</a>
            </div>
        </div>

        <div id="bottom">
{/* 
            <img src={logo} alt="" /> */}
        </div>
    </div>
  )
}

export default Sidebar