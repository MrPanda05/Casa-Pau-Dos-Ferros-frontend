'use server'

import { GetMyCart, GetProductsOfMyCart, ICartItem } from "@/components/CartRelated/cartCommons";
import { CoockieGet } from "@/components/common/CoockiesManegers";
import { IProduct } from "@/components/storeRelated/storeCommons";
import Link from "next/link";

export default async function Page() {
  const {data} = await GetProductsOfMyCart()
  const userId = await CoockieGet("userId")
  console.log(data)
  //todo improve ui
  return (
    <div className="size-full flex flex-col items-center justify-center">
        <h1 className="text-center">Meu carrinho</h1>
        <div>
          {data.results !== undefined ? data.results.map((_: IProduct, index: number) => (
            <div key={index}>{data.results[index].quantity}</div>
        )): <div>Carrinho vazio</div>}
        </div>
        <div>
          {
            data.results !== undefined ? <Link href={`/user/${userId?.value}/cart/checkout`} className="blueButton">Finalizar compras</Link>: <div></div>
          }
          
        </div>
    </div>
  );
}
