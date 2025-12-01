import star from "../assets/images/logos/star.png"
import bookmark from "../assets/images/logos/bookmark.png"
import product from "../assets/images/advertisement/ad-1.png"

import '../assets/css/product.css'
import { Link } from "react-router-dom"

function Product({divkey ,title , image , description , price }) {
  

    return (
    
    <Link to="/product/asus tuf 15" id='product'>

        <div id="top">
            <div id="left">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </div>

            <div id="right">
                <button>
                    <img src={bookmark} />
                </button>
            </div>
        </div>

        <div id="bottom">
            <div id="image">
                <img src={image} />
            </div>

            <div id="description" key={divkey}>
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>Rs.{price}00</h2>
            </div>
        </div>

    </Link>
  )
}

export default Product