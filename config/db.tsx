// lib/db.ts (or .js)
import mysql from 'mysql2/promise';



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



