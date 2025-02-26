'use server'

import { GetMyCart, ICartItem } from "@/components/CartRelated/cartCommons";

export default async function Page() {
  const {data} = await GetMyCart()
  console.log(data)
  //todo improve ui
  return (
    <div className="size-full">
        <h1 className="text-center">Meu carrinho</h1>
        <div>
          {data.results !== undefined ? data.results.map((_: ICartItem, index: number) => (
            <div key={index}>{data.results[index].quantity}</div>
        )): <div>Carrinho vazio</div>}
        </div>
    </div>
  );
}
