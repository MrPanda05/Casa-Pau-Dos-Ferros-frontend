import { AddToCartButton, RemoveFromCartButton } from "@/components/CartRelated/CartButtons";
import { GetMyProduct } from "@/components/storeRelated/storeCommons";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const { data } = await GetMyProduct(id);
    return (
        <div className="grid grid-row-3 justify-center gap-10 text-black">
            <h1 className="text-2xl font-bold text-center text-white mt-5">{data["name"]}</h1>
            <div className="border-cyan-500 border-4 rounded-md bg-blue-200 size-96 grid grid-rows-3 justify-center">
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
                {Number(data["amount"]) <= 0 ? <div className="m-1 font-bold text-red-800">
                <p className="p-1 px-4 text-center">Esgotado</p>
                </div> :
                <div className="flex flex-row justify-between font-bold mt-10">
                    <RemoveFromCartButton productId={id} />
                    <AddToCartButton productId={id} />
                </div>
                }
            </div>
            <div>
                <div className="text-center text-white font-bold">Descrição</div>
                <div className="bg-white text-black text-center border-cyan-500 border-4 rounded-md">{data["description"]}</div>
            </div>
        </div>
    );
}
