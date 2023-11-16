import prisma from "@/lib/prismaDb";
import {NextRequest,NextResponse} from "next/server";

export async function POST (req:NextRequest) {
    try {
        const data = await req.json();
        const userId = data.userId;

        const user = await prisma.shops.findUnique({
            where:{
                userId
            },
        });

        if(user) {
            return new NextResponse("you already have one shop with account!", {status:400})
        }

        const shop = await prisma.shops.create({data});

        return NextResponse.json(shop);

    } catch (error) {
        console.log('create shop error',error)
        return new NextResponse("Internal Error", {status:500})
    }
}