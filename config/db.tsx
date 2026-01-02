// lib/db.ts (or .js)
import mysql from 'mysql2/promise';
import { data } from 'react-router-dom';



export const database = mysql.createPool({
  host: 'localhost',
  user: 'rupeshram013',
  password: 'admin013',
  database:'ambinfos_data',
});



try {
  const connection = await database.getConnection();
  console.log("Database Query executed Sucessfully ;");
  connection.release();

}catch (error){
  console.error("Error was Occured on the database :", error)
  process.exit(1);

}



export async function readingdata( query : string , data : string){

  const res = await database.execute(query , data);
  return res
  
}



export async function signup(token : number , FirstName:string , SecondName : string , UserName: string , Email : string , Password : string){

  const res = await database.execute("insert into users (token , firstname , secondname , username , usermail , userpass) values (? , ? ,? ,?)" , [token , FirstName , SecondName , UserName , Email , Password] )
  return res;
}



