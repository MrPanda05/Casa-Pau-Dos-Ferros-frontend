import { AddToCartButton, RemoveFromCartButton } from "@/components/CartRelated/CartButtons";
import { GetMyProduct } from "@/components/storeRelated/storeCommons";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const { data } = await GetMyProduct(id);
    return (
        <div className="grid grid-row-2 justify-center gap-10 text-black">
            <h1 className="text-2xl font-bold text-center text-white">{data["name"]}</h1>
            <div className="bg-white size-[50rem] mb-10 grid grid-rows-3 justify-center">
                <h1 className="font-bold text-2xl">{data["name"]}</h1>
                <Image
                    src={`data:image/png;base64,${data["base64_image"]}`}
                    alt="product image"
                    width={200}
                    height={100}
                    placeholder="blur"
                    blurDataURL="/donaldotrumpete.jpg"
                />
                <div className="flex flex-row justify-center gap-14">
                    <div>R${data["price"]}</div>
                    <div>{data["amount"]}</div>
                </div>
                <div className="flex flex-row justify-between font-bold ">
                    <RemoveFromCartButton productId={id} />
                    <AddToCartButton productId={id} />
                </div>
            </div>
        </div>
    );
}
