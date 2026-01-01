import React from 'react'
import logo from '../assets/images/logos/logowhitetop.png'
import "../assets/css/sidebar.css"
import category from '../assets/images/logos/menu.png'
import { useRef , useState } from 'react'
import Image from 'next/image'
import Category from '../assets/images/logos/categories.png'
import Profile from '../assets/images/logos/user.png'
import Contact from '../assets/images/logos/telephone.png'
import About from '../assets/images/logos/about.png'
import Policy from '../assets/images/logos/policy.png'



function Sidebar({displayOption}) {

    return (

    <div id='sidebar' style={{display:displayOption}}>


        <div id="top">
            {/* <h1>Menu</h1> */}
        </div>

        <div id="mid">
            <h1>
                <Image src={Category} alt='Hello' width={25} height={25}></Image>
                Categories
            </h1>

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

            <div id="about">

                <a href="/about"><h1>
                    <Image src={About} alt='Hello' width={25} height={25}></Image>
                    About</h1></a>
                <a href="/contact"><h1>
                    <Image src={Contact} alt='Hello' width={25} height={25}></Image>
                    Contact</h1></a>
                
                <a href="/policy"><h1>
                    <Image src={Policy} alt='Hello' width={25} height={25}></Image>
                    Policy</h1></a>
                <a href="/login"><h1>
                    <Image src={Profile} alt='Hello' width={25} height={25}></Image>
                    Profile
                </h1></a>
            </div>
{/* 
            <img src={logo} alt="" /> */}
        </div>
    </div>
  )
}

export default Sidebar