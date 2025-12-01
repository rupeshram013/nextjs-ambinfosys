import React from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/navbar.jsx'
import '../assets/css/categorypage.css'



function CategoryPage() {

    const params = useParams()

  return (
    <div>
        <Navbar></Navbar>

    </div>
  )
}

export default CategoryPage