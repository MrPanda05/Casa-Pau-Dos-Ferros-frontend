import { GetProductsOfMyCart, ICartItem } from "@/components/CartRelated/cartCommons";
import CartItem from "@/components/CartRelated/CartItem";
import { CoockieGet } from "@/components/common/CoockiesManegers";
import Link from "next/link";

export default async function Page() {
  const {data} = await GetProductsOfMyCart()
  const userId = await CoockieGet("userId")
  console.log(data)
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-600 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Meu Carrinho</h1>
        <div className="bg-slate-700 w-full max-h-[60vh] overflow-y-auto rounded-lg">
          <div className="flex flex-col justify-center items-center p-4">
            {data !== undefined && data.length > 0 ? (
              data.map((_: ICartItem, index: number) => (
                <CartItem 
                  key={index} 
                  product_id={data[index].product_id} 
                  quantity={data[index].quantity} 
                  price={data[index].price} 
                  name={data[index].name} 
                  base64_image={data[index].base64_image}
                />
              ))
            ) : (
              <div className="py-8 text-gray-500">Carrinho vazio</div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          {data && data.length > 0 ? (
            <Link 
              href={`/user/${userId?.value}/cart/checkout`} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Finalizar compras
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}