'use client'

import '../assets/css/home.css' 
import Navbar from '../components/navbar.tsx'
// import Category from './components/category.jsx'
import Product from '../components/product.tsx'
import ProductPage from '../product/product';
import LoginPage from './login.tsx';
import advertisement_1 from '../assets/images/advertisement/ad-0.png'
// import advertisement_2 from '../assets/images/advertisement/ad-1.png'
// import advertisement_3 from '../assets/images/advertisement/ad-2.png'
// import advertisement_4 from '../assets/images/advertisement/ad-3.png'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect , useState } from 'react';
import axios from 'axios';
import Loading from '../components/loading.tsx';

function HomePage() {


  const mainproduct = productquery('https://fakestoreapi.com/products')

  const error = mainproduct.error 
  const loading = mainproduct.loading 
  const products = mainproduct.products 

  if(error){
    return <h1>Something Went Wrong</h1>
  }
  
  if(loading){
    return <Loading></Loading>

  }



  return (
  
    <div>
        <div id="advertisement">
          <Image src={advertisement_1} alt={'alt'}  />
          <div id="text">

            <div id="left">
              <Link href={'/product/asus-tuf-a15'}>Purchase</Link>
            </div>
            <div id="mid">
              <Link href={'/product/asus-tuf-a15'}>WishList</Link>
            </div>

            <div id="right">
              <h1>Asus VivoBook 15X Oled</h1>
              <p>
                i3 1220P 12th Gen 8 GB RAM 256 GB SSD 15.6" OLED Fingerprint Windows 11 Quiet Blue
              </p>
            </div>
          </div>
        </div>

        <div id="laptops" className='product-box'>

          <h1 id='title'>Laptop</h1>

          <div className="inner-box">

            {products
            .slice(8,15)
            .map((products) => (
              <Product key={products.id} divkey={products.id} title = {products.title} image={products.image} description={products.description} price={products.price}>

              </Product>

              
            ))}


          </div>

          <Link href='/category/laptop' className='seemore'>See More</Link>
        </div>

    </div>

  )
}

export default HomePage





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