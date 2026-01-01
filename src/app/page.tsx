
import './assets/css/home.css' 
import Product from './components/product'
import advertisement_1 from './assets/images/advertisement/ad-0.png'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { json } from 'stream/consumers';
import { database } from '../../config/db';


export default async function Home(){

  

  return (
    <div>
        <div id="advertisement">
          <Image src={advertisement_1} alt={'alt'}  />
          <div id="text">

            <div id="right">
              <h1 id='ad-title'>Asus VivoBook 15X</h1>
              <p id='ad-description'>
                Feel The Freedom To Control Your Workflow and Continue.
              </p>
            </div>
          </div>

          <div id="ad-links">
              <Link href={'/laptop/asus-vivobook-15x'}>Oled</Link>
              <Link href={'/signup'} style={{backgroundColor:'transparent' , border:' 2px solid black' , color:"black"}}>Slim</Link>
          </div>

        </div>

        <div id="laptops" className='product-box'>

          <h1 id='title'>Laptop</h1>

          <div className="inner-box">


          </div>

          <Link href='/category/laptop' className='seemore'>See More</Link>
        </div>

    </div>
  );
}


