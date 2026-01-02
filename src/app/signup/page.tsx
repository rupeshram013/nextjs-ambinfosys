'use client'

import '../assets/css/form.css'
import Link from 'next/link'
import Image from 'next/image'
import { signup } from '../../../config/db'
import tiktok from '../assets/images/logos/tiktok_black.png'
import facebook from '../assets/images/logos/facebook_black.png'
import instagram from '../assets/images/logos/tiktok_black.png'
import loginposter from '../assets/images/advertisement/Login_Poster.png'
import { FormEvent } from 'react'


export default function SignUp(){


    return (
        <div id='outerformbox'>
            <div id="formbox">

                <div id="left">

                    <Link href={"/"} id='back'>🡠</Link>

                    <h1>SignUp</h1>

                    <form action="/signup" method='post'>
                        <input type="text" placeholder='FullName' name='fullname'/>
                        <input type="text" placeholder='UserName' name='username'/>
                        <input type="text" placeholder='Email' name='email'/>
                        <input type="text" placeholder='Password' name='password1'/>
                        <input type="text" placeholder='Password' name='password2'/>


                        <button type="submit">SignUp</button>
                    
                        <div id="links">
                            <Link href='/login' style={{color:'green'}}>Already Have an Account?</Link>
                            <Link href='/password' style={{color:'red'}}>Forgot Password?</Link>
                        </div>

                        <div id="social">
                            <Link href=''>
                                <Image src={tiktok} alt='tiktok'></Image>
                            </Link>
                            <Link href=''>
                                <Image src={facebook} alt='facebook'></Image>
                            
                            </Link>
                            <Link href=''>
                                <Image src={instagram} alt='instagram'></Image>
                            
                            </Link>
                        </div>
                    </form>

                </div>

                <div id="right">

                    <Image src={loginposter} alt='Login Poster'></Image>

                </div>
            </div>

        </div>
    )
}