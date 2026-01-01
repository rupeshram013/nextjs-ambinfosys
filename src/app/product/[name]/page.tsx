
import { error } from "console";
import pool from "../../../../config/db";
import '../../assets/css/product.css'

import { readingdata } from "../../../../config/db";





export default async function ProductPage({params}:{
    params : {name:string};
}){
   
   const name = (await params).name   
   const productname = name.replace(/%20/g, ' ');

   const data = await readingdata("select * from products where pname = ? " , [productname]);
   const product = data[0]


   return(
      <div>


         <div id="outerproduct">

            
         {

            product.map((item : any) => {
               return (
                  <div key={item.id}>                     
                     <div id="product">

                        <div id="top">
                           <div id="left">
                              <img src="/products/laptop/318085/1.png" alt=""  />
                              <img src="/products/laptop/318085/2.png" alt=""  />
                              <img src="/products/laptop/318085/3.png" alt=""  />
                              <img src="/products/laptop/318085/4.png" alt=""  />
                              <img src="/products/laptop/318085/5.png" alt=""  />
                           </div>

                           <div id="right">
                              <h6>laptop</h6>
                              <h1>{productname}</h1>
                              <p id="description">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolorum doloremque temporibus mollitia deleniti ad veniam quidem alias illum perferendis maiores recusandae natus dolor voluptatum ea rem, earum eos quos provident aut animi placeat tenetur! Vero accusamus sit minima commodi earum laborum! Suscipit necessitatibus magnam ad doloremque, voluptates deserunt tempore.
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

      </div>
   )
}


