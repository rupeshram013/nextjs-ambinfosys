
import { error } from "console";
import pool from "../../../../config/db";





export default async function ProductPage({params}:{
    params : {name:string};
}){
   
   const name = (await params).name   
   const productname = name.replace(/%20/g, ' ');

   const [rows] = await pool.execute<any[]>('select * from products where pname = ?' , [productname])
   const productdata : any = rows[0];

   console.log(productdata)

   return(
      <div>





      </div>
   )
}


