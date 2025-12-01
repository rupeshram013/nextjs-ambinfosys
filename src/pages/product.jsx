import React , {useEffect, useState} from 'react'

import '../assets/css/productpage.css'
import Navbar from '../components/navbar.jsx'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

function ProductPage() {

  const queryString = useLocation();



  const params = useParams()


  const mainproduct = productquery('https://fakestoreapi.com/products')

  const error = mainproduct.error 
  const loading = mainproduct.loading 
  const products = mainproduct.products 

  if(error){
    return <h1>Something Went Wrong</h1>
  }
  
  if(loading){
    return <h1>Loading</h1>

  }

  return (
    <div id='productpage'>


      <Navbar></Navbar>

      <h1>{typeof(products)}</h1>

      <h1>{products.map((products) => (
        <div key={products.id}>
          <p >
            {products.title}
          </p>
        </div>
      ))}</h1>

    </div>
  )
}

export default ProductPage


const productquery = (urlpath) => {

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