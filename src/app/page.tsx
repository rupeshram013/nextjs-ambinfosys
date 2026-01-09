
import './assets/css/home.css' 
import './assets/css/product.css' 
import Product from './components/product'
import advertisement_1 from './assets/images/advertisement/ad-0.png'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { json } from 'stream/consumers';
import { database } from '../../config/db';
import { readingdata } from '../../config/db';

import star from './assets/images/logos/star.png'
import starfilled from './assets/images/logos/starfilled.png'
import bookmark from './assets/images/logos/bookmark.png'


async function productdata(){
  const res = await fetch("http://localhost:3000/api/products")

  if(!res.ok){

    throw new Error("Failed to fetch product data");
  }

  return res.json();

}



export default async function Home(){

  const data = await productdata()

  const product = await productdata();

  console.log(product)
  

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

            
        {
          
          product.slice(0,5).map((item:any) => {
            
            const imagepath = "/products/" + item.category + "/" + item.id + "/" +"1.png"
            const url = "/product/" + item.pname
            const price = new Intl.NumberFormat( 'en-IN' , {
              style : 'currency',
              currency : 'NPR',
              minimumFractionDigits:0,
              maximumFractionDigits:0              
            }).format(item.price)

            console.log(imagepath)
            
            return (
              
              <Product pname={item.pname} specification={item.specification} price={price} imagepath={imagepath} url={url} key={item.id}></Product>
            
            )})

            }  



          </div>

          <Link href='/category/laptop' className='seemore'>See More</Link>
        </div>

    </div>
  );
}


