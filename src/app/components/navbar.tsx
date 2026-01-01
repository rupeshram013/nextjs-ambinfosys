'use client'

import React, { useState } from 'react'
import logo from '../assets/images/logos/logowhitetop.png'
import search from '../assets/images/logos/searchwhite.png'
import category from '../assets/images/logos/menuwhite.png'
import login from '../assets/images/logos/userwhite.png'
import Sidebar from './sidebar'
import '../assets/css/navbar.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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

  const location = usePathname();

  const isLogin = location === '/login' || location === '/signup' || location === '/product/' || location === '/category';


  return (

    <div>

      <Sidebar displayOption={sidebarDefaultState}></Sidebar>
      
      <div id='navbar' style={{position:isLogin ? 'relative' : 'fixed'}}>

        <div id="left">
          <button >
            <Image src={category} alt=""  onClick={sidebarchanger}/>
          </button>
          <Link href="/">
            <Image src={logo} alt=""  />
          </Link>
        </div>   

        <div id="mid">
          <Link href="/category/laptop">Laptop</Link>    
          <Link href="/category/network">Network</Link>    
          <Link href="/category/printer">Printer</Link>    
          <Link href="/category/monitor">Monitor</Link>    
          <Link href="/category/keyboard">Keyboard</Link>    
          <Link href="/category/mouse">Mouse</Link>    
          <Link href="/category/headset">Headset</Link>
        </div>

        <div id="right">
          <Link href="/login">
            <Image src={login} alt=""  />
            <p>Login</p>
          </Link>
          <Link href="/signup">
            <Image src={login} alt=""  />
            <p>SignUp</p>
          </Link>
        </div>

      </div>


    </div>

    )
}

export default Navbar