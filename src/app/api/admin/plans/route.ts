import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "ADMIN") {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const plans = await prisma.plan.findMany({
            orderBy: { price: "asc" },
        });

        return NextResponse.json(plans);
    } catch (error) {
        console.error("[PLANS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "ADMIN") {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { name, price, stripePriceId, features, isActive } = body;

        if (!name || price === undefined) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const plan = await prisma.plan.create({
            data: {
                name,
                price: parseFloat(price),
                stripePriceId,
                features: features || [],
                isActive: isActive ?? true,
            },
        });

        return NextResponse.json(plan);
    } catch (error) {
        console.error("[PLANS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
