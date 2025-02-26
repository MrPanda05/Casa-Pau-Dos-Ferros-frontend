"use server";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton, RemoveFromCartButton } from "../CartRelated/CartButtons";
import { IProduct } from "./storeCommons";

//todo change getproduct image, to change permisiton later
export default async function Item({ product }: { product: IProduct }) {
    return (
        <div className="flex flex-col bg-slate-50 text-black text-center border-gray-950 border-4">
            <h1 className="font-bold">
                <Link href={`/loja/item/${product.product_id}`} className="self-center">
                    {product.name}
                </Link>
            </h1>
            <Link href={`/loja/item/${product.product_id}`} className="self-center">
                <Image
                    src={`data:image/png;base64,${product.base64_image}`}
                    alt="product image"
                    height="0"
                    width="0"
                    style={{ width: "100px", height: "100px", overflow: "clip" }}
                    placeholder="blur"
                    blurDataURL="/donaldotrumpete.jpg"
                />
            </Link>
            <div className="flex flex-row justify-center gap-14">
                <div className="font-bold">R${product.price}</div>
            </div>
            <div className="flex flex-row justify-between font-bold">
                <RemoveFromCartButton productId={product.product_id.toString()} />
                <AddToCartButton productId={product.product_id.toString()} />
            </div>
        </div>
    );
}
