// lib/db.ts (or .js)
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';
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
  try {
    const res = await database.execute(query , data);
    return res 

  }catch(err){
    return err
  }
}



export async function signup(token : number , Fullname: string , UserName: string , Email : string , Password : string){
  try {
    const res = await database.execute("insert into users (token , fullname, username , usermail , userpass) values (?, ? , ? ,? ,?)" , [token , Fullname, UserName , Email , Password] )
    return res
  }catch(err){
    return NextResponse.json({Error:err});
  }
}


export async function login(token : number , FirstName:string , SecondName : string , UserName: string , Email : string , Password : string){

  const res = await database.execute("insert into users (token , firstname , secondname , username , usermail , userpass) values (? , ? ,? ,?)" , [token , FirstName , SecondName , UserName , Email , Password] )
  return res;
}



