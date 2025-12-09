import star from "../assets/images/logos/star.png"
import bookmark from "../assets/images/logos/bookmark.png"
import product from "../assets/images/advertisement/ad-1.png"

import '../assets/css/product.css'
import Link from "next/link"
import Image from "next/image"

type ProductProps = {

    title:string,
    description:string,
    price:number,
    image:string

}



function Product({title , description , price , image} : ProductProps) {
  

    return (
    
    <Link href="/product/asus tuf 15" id='product'>

        <div id="top">
            <div id="left">
                <Image src={star} alt={'null'}/>
                <Image src={star} alt={'null'}/>
                <Image src={star} alt={'null'}/>
                <Image src={star} alt={'null'}/>
                <Image src={star} alt={'null'}/>
            </div>

            <div id="right">
                <button>
                    <Image src={bookmark} alt={'null'}/>
                </button>
            </div>
        </div>

        <div id="bottom">
            <div id="image">
                <Image src={product} alt={'null'}/>
            </div>

            <div id="description">
                <h1>{title}</h1>
                <p>{description}</p>
                <h2>Rs.{price}</h2>
            </div>
        </div>

    </Link>
  )
}

export default Product