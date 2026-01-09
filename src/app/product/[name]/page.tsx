
import { error } from "console";
import '../../assets/css/productpage.css'
import Image from "next/image";
import right from '../../assets/images/logos/right.png'
import left from '../../assets/images/logos/left.png'

import { readingdata } from "../../../../config/db";
import path from "path";

export default async function ProductPage({params}:{
    params : {name:string};
}){
   
   const name = (await params).name   
   
   const productname = name.replace(/%20/g, ' ');
   const finalname = productname.replace(/%22/g , '"')
   console.log("THE PRODUCT NAME :" , finalname)

   // const data = await readingdata("select * from products where pname = ? " , [productname]);
   // const id = await readingdata("select id from products where pname = ? " , [productname]);
   
   
   // const productstruct= 
   // {
   //       product : data[0],
   //       id : id[0][0].id,
   //       category : data[0][0].category
   // }
   
   // const specification = await readingdata(`select * from ${productstruct.category} where id = ${productstruct.id} ` , []);



   const products = await fetch("localhost:3000/api/product/")



   return(
      <div>


         <div id="outerproduct">

            
         {

            productstruct.product.map((item : any) => {

               
               const images = [
                  {
                     id:1,
                     path:`/products/${item.category}/${item.id}/1.png`,
                  },
                  {
                     id:2,
                     path:`/products/${item.category}/${item.id}/2.png`,
                  },
                  {
                     id:3,
                     path:`/products/${item.category}/${item.id}/3.png`,
                  },
                  {
                     id:4,
                     path:`/products/${item.category}/${item.id}/4.png`,  
                  },
                  {
                     id:5,
                     path:`/products/${item.category}/${item.id}/5.png`,  
                  },
               
               ]





               return (
                  <div key={item.id}>                     
                     <div id="product-page">

                        <div id="top">
                           <div id="left">
                              <button>
                                 <Image src={left} alt="Error" />
                              </button>
                              <div id="images">
                                 {

                                    images.map((images) => {
                                       
                                       return (
                                          <img src={images.path} alt={item.pname} key={images.id}/>
                                       )
                                    })

                                 }
                              </div>
                              <button>
                                 <Image src={right} alt="Error" />

                              </button>
                           </div>

                           <div id="right">
                              <h6>laptop</h6>
                              <h1>{productname}</h1>
                              <p id="description">
                                 {item.specification}
                              </p>

                              <h5 id="price">Rs.1,50,000</h5>

                              <form action="/checkout">

                                 <input type="number" name="quantity" id="quantity" placeholder="1" />

                                 <button type="submit">Buy</button>
                              
                              </form>
                           </div>
                        </div>

                        <div id="bottom">

                        </div>
                     </div>



                  </div>

               )
            })
 
         }

      </div>
      
      <div id="specificationbox">
         
         
         {


            specification.map((specificationdata) => {



               return (
                  <div id="points" key={specificationdata.model}>
                     <h1>{specificationdata.model}</h1>
                  </div>

               )
            })            


         }







      </div>


      </div>
   )
}


