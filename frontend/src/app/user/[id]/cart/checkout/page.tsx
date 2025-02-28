'use client'

import { GetProductsOfMyCart } from "@/components/CartRelated/cartCommons";
import CheckoutForm from "@/components/CartRelated/CheckoutForm";
import { CoockieGet } from "@/components/common/CoockiesManegers";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
    const params = useParams();
    const userId = params.id; 
    useEffect(() => {
      const doShit = async () => {
        const coockieId = await CoockieGet("userId");
        if(userId !== coockieId?.value){
          router.push(`/user/${coockieId?.value}/cart/checkout`);
        }
        const {data, status} = await GetProductsOfMyCart()
        console.log(data)
        if(data === undefined || data.length === 0 || status === 404){
          router.push(`/user/${coockieId?.value}/cart`);
      }
    }
      doShit()
    }, [router, userId])
  return (
    <div className="size-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-2xl">Confirmar compras</h1>
        <div className="bg-gray-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
            <CheckoutForm />
        </div>
    </div>
  );
}
