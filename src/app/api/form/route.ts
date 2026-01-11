
import { NextResponse } from "next/server";
import { signup , readingdata } from "../../../../config/db";



async function signupform(bodyargument:FormData){

    const token = Number( Math.random() * 9999)
    const fullname = bodyargument.get("fullname")
    const username = bodyargument.get("fullname")
    const email = bodyargument.get("fullname")
    const password = bodyargument.get("fullname")
    
    console.log(token , fullname , username , email , password);
    const result = await signup(token , fullname , username , email , password)
    

    console.log(result)

}



export async function POST(req:Request){
    console.log("Post Request was made:");

    const bodyargument = await req.formData();
    console.log(bodyargument)

    const formtype = bodyargument.get("type")

    if(formtype === "login"){


    }else if(formtype === "signup"){
        
        const maindata = await signupform(bodyargument);

        return NextResponse.redirect("http://localhost:3000")
    }

}