import prisma from "@/lib/prismaDb";
import cloudinary from "@/lib/cloudinary";

import {User,currentUser} from "@clerk/nextjs/server";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const data = await req.json();
        const user:User | null = await currentUser();
        
        if(data.images && data.images.length > 0) {
            const validImages = data.images.filter((image:string) => image!==undefined);

            const uploadImages = await Promise.all(
                validImages.map(async(image:string) => {
                    const result = await cloudinary.uploader.upload(image);
                    return {
                        create:{
                            public_id:result.public_id,
                            url:result.secure_url,
                        }
                    }
                })
            )
        }
    } catch (error) {

    }
}