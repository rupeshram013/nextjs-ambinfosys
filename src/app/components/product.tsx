import product from "../assets/images/advertisement/ad-1.png"

import '../assets/css/product.css'
import star from '../assets/images/logos/star.png'
import starfilled from '../assets/images/logos/starfilled.png'
import bookmark from '../assets/images/logos/bookmark.png'

import Link from "next/link"
import Image from "next/image"

type ProductProps = {

    pname:string,
    specification:string,
    price:string,
    imagepath:string,
    url:string

}



function Product({pname , specification , price , imagepath , url} : ProductProps) {
  
    console.log("The URL" , url)

    return (
    
    <a href={url} id='product-card'>

        <div id="top">
            <div id="left">
                <Image src={starfilled} alt="Error" />
                <Image src={starfilled} alt="Error" />
                <Image src={starfilled} alt="Error" />
                <Image src={star} alt="Error" />
                <Image src={star} alt="Error" />
            </div>

            <div id="right">
                <Image src={bookmark} alt="Error" />
            </div>

        </div>

        <div id="imagebox">
            <Image src={imagepath} alt={pname} height={150} width={150} />
        </div>

        <div id="bottom">
            <h5 id='title'>{pname}</h5>
            <h6 id='subtitle'>{specification}</h6>
            <p id='price'>{price}</p>
        </div>

    </a>
  )
}

export default Product