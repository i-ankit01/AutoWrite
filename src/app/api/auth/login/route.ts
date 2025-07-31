import { prisma } from "@/lib/prisma";
import { NextRequest , NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req : NextRequest){
    const {email , password} = await req.json();
    
    const user = await prisma.user.findUnique({where : {email}});
    if(!user){
        return NextResponse.json({
            message : "user not found"
        }, {status : 404})
    }
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){
        return NextResponse.json({
            message : "invalid credentials"
        })
    }
    return NextResponse.json({
        message : "User logged in successfully",
        user : {
            id : user.id,
            name : user.name,
            email : user.email
        }
    })

}