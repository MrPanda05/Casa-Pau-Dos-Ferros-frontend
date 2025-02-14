// import { NextResponse } from "next/server";
import { NextResponse } from "next/server";
import { bosta } from "./data";

export async function GET(
    _request :Request,
    {params} : {params: {id: string}}
) {
    const { id } = await params;
    const filter = bosta.find((item) => item.id === id);
    if(filter !== undefined){
        return NextResponse.json(filter, { status: 200 });
    }else{
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

}

// export async function HEAD(request: NextRequest) {}
 
// export async function POST(request: NextRequest) {}
 
// export async function PUT(request: NextRequest) {}
 
// export async function DELETE(request: ReqNextRequestuest) {}
 
// export async function PATCH(request: NextRequest) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.
// export async function OPTIONS(request: NextRequest) {}