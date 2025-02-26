import { AddToCartButton, RemoveFromCartButton } from "@/components/CartRelated/CartButtons";
import { GetMyProduct } from "@/components/storeRelated/storeCommons";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const { data } = await GetMyProduct(id);
    return (
        <div className="grid grid-row-3 justify-center gap-10 text-black">
            <h1 className="text-2xl font-bold text-center text-white mt-5">{data["name"]}</h1>
            <div className="bg-white size-96 grid grid-rows-3 justify-center">
                <Image
                    src={`data:image/png;base64,${data["base64_image"]}`}
                    alt="product image"
                    height="0"
                    width="0"
                    style={{ width: "150px", height: "150px", overflow: "clip" }}
                    placeholder="blur"
                    blurDataURL="/donaldotrumpete.jpg"
                    className="mt-10"
                />
                <div className="mt-20 text-center font-bold">
                    <div>R${data["price"]}</div>
                </div>
                <div className="flex flex-row justify-between font-bold mt-10">
                    <RemoveFromCartButton productId={id} />
                    <AddToCartButton productId={id} />
                </div>
            </div>
            <div>
                <div className="text-center text-white font-bold">Descrição</div>
                <div className="bg-white text-black text-center">{data["description"]}</div>
            </div>
        </div>
    );
}
