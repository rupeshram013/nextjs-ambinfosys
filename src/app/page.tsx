'use client'
import './assets/css/home.css' 
import Product from './components/product'
import advertisement_1 from './assets/images/advertisement/ad-0.png'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { json } from 'stream/consumers';
import pool from '../../config/db';
  
type ProductProps = {

  title:string,
  description:string,
  price:number,
  image:string

}


async function getproducts(): Promise<ProductProps[]> {
  const res = await fetch("https://fakestoreapi.com/products")
  if(!res.ok) {
    throw new Error("Api Couldn't Read Data")
  }

  return res.json();
}

export default async function Home() {


  const allproducts = await pool.execute('select * from products');

  const mainproduct = await getproducts();

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

            {mainproduct
            .slice(8,15)
            .map((products) => (

              <Product title={products.title} description={products.description} price={products.price} image={products.image}></Product>
              
            ))}
          </div>

          <Link href='/category/laptop' className='seemore'>See More</Link>
        </div>

    </div>
  );
}




const productquery = (urlpath :string) => {

  const [products , setProductData] = useState([])  
  const[error, setError] = useState(false)
  const[loading , setLoading] = useState(false)



  useEffect(() => {

    // axios.get('https://fakestoreapi.com/products')
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlpath)
        setProductData(response.data)
        setLoading(false)
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    })()        

  

  },[])


  return{
    products,
    error,
    loading
  }
  
}