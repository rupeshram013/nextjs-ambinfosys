import '../assets/css/home.css' 
import Navbar from '../components/navbar.jsx'
// import Category from './components/category.jsx'
import Product from '../components/product.js'
import ProductPage from './product.jsx';
import LoginPage from './login.tsx';
import advertisement_1 from '../assets/images/advertisement/ad-0.png'
// import advertisement_2 from '../assets/images/advertisement/ad-1.png'
// import advertisement_3 from '../assets/images/advertisement/ad-2.png'
// import advertisement_4 from '../assets/images/advertisement/ad-3.png'
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios';

function HomePage() {


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
  
    <div>

      <Navbar></Navbar>

              {/* <Button name={"Click Me"} buttoncolor={"white"}></Button> */}
        <div id="advertisement">
          <img src={advertisement_1} alt=""  />
          <div id="text">
            <h1>Asus VivoBook 15X Oled</h1>
            <p>
              i3 1220P | 12th Gen | 8 GB RAM | 256 GB SSD | 15.6" OLED | Fingerprint | Windows 11 | Quiet Blue
            </p>
          </div>
        </div>

        <div id="laptops" className='product-box'>

          <h1 id='title'>Laptop</h1>

          <div className="inner-box">

            {products
            .slice(8,15)
            .map((products) => (
              <Product divkey={products.id} title = {products.title} image={products.image} description={products.description} price={products.price}>

              </Product>

              
            ))}


          </div>

          <Link to='/category/laptop' className='seemore'>See More</Link>
        </div>

    </div>

  )
}

export default HomePage





const productquery = (urlpath ) => {

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