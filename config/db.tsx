// lib/db.ts (or .js)
import mysql from 'mysql2/promise';

// Create a connection pool for efficiency
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


export default pool

// try{
//     const connection = await pool.getConnection();
//     console.log('Database Connected Sucessfully!!');
//     connection.release(); 
// } catch (err){

//     console.error("Database Connection Was not Established" , err);
//     process.exit(1);
// }