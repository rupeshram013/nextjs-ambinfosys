


import { NextResponse } from "next/server";
import { readingdata } from "../../../../config/db";

export async function GET(){


    const data = await readingdata("select * from products" , []);

    console.log(data)



    return NextResponse.json(data[0])
}