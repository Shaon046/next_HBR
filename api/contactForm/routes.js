import { NextResponse } from "next/server";
import {state} from "../../pages/page-contact";



export async function Get(){
    const data =state;
    return NextResponse.json(data,{status:200})
}

