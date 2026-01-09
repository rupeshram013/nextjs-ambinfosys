
import { database } from '../../../../config/db';
import { readingdata } from '../../../../config/db';
import React from 'react'
import { useParams } from 'react-router-dom'
import '../../assets/css/categorypage.css'
import star from '../../assets/images/logos/star.png'
import starfilled from '../../assets/images/logos/starfilled.png'
import bookmark from '../../assets/images/logos/bookmark.png'
import Image from 'next/image';



interface product{
  id:number,
  pname:string,
  price:string


}


export default async function CategoryPage({params} : {
  params: {name:string};
}) {

    const name = (await params).name
    const categoryname = name.replace(/%20/g,'');
    
    
    const data = await readingdata("select * from products where category = ? " , [categoryname]);
    const product = data[0]
    
    console.log(product)

  return (
    <div>

        <h1>{categoryname}</h1>
        
        <div id="category">

          
        {
          
          product.slice(0,25).map((item:any) => {
            
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
              
              <a id="product" href={url} key={item.id}>

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
                      <Image src={imagepath} alt={item.pname} height={150} width={150} />
                  </div>

                  <div id="bottom">
                        <h5 id='title'>{item.pname}</h5>
                        <h6 id='subtitle'>{item.specification}</h6>
                        <p id='price'>{price}</p>
                  </div>

                </a>
              )})

            }  

      </div>
    </div>
  )
}

