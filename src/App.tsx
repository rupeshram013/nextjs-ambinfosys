import './App.css'
import {createBrowserRouter , RouterProvider , Link} from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Product from './components/product.js'
import HomePage from './pages/home.jsx';
import ProductPage from './pages/product.jsx';
import CategoryPage from './pages/category.tsx';
import LoginPage from './pages/login.tsx';
import Notfound from './pages/notfound.tsx';


function App() {

  const mainrouter = createBrowserRouter ([
    {
      path:'/',
      element: <HomePage></HomePage>
    },
    {
      path:"/product/:name",
      element: <ProductPage></ProductPage>
    },
    {
      path:"/category/:name",
      element: <CategoryPage></CategoryPage>
    },
    {
      path:"/login",
      element: <LoginPage></LoginPage>
    },
    {
      path:"*",
      element:<Notfound></Notfound>
    }


  ]) 

  return (
  
    <div>
      {/* <img loading='lazy' src={poster} id='top-poster'></img> */}
      <RouterProvider router={mainrouter}></RouterProvider>
    </div>

  )
}

export default App
