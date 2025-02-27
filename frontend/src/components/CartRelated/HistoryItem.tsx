'use client'
import { useState } from "react";
import { OrderDevolution } from "./cartCommons";
import { useRouter } from "next/navigation";

export default function HistoryItem({order_id, cart, user_address, payment_method, total, status} :  {order_id: string, cart: string, user_address: string, payment_method: string, total: string, status: number}) {
    const router = useRouter();
    const [isDevolution, setIsDevolution] = useState(false);
    async function handleClick(){
        setIsDevolution(true)
        try {      
            const {data, status} = await OrderDevolution(Number(order_id));
            if(status !== 200 && status !== 201){
                console.log(data)
            }
            else {
                console.log('rembolsado')
                router.refresh()
            }
        } catch (error) {
            console.log(error)
        } finally{
            setIsDevolution(false);
        }
    }
    return(
        <div className="flex flex-col bg-blue-200 text-black text-center border-gray-950 border-4 rounded-md py-2 gap-2 mx-10 font-bold">
            <h1 className="mx-10">
                ID de compra: {order_id}
            </h1>
            <div>
                Pagamento: {payment_method}
            </div>
            <div>
                Total: R${total}
            </div>
            {(Number(total) < 100) ? <button disabled className="font-bold mx-5 border-gray-950 border-2 px-5 bg-red-200 rounded-lg text-lg basis-sm">Inelegivel para re-embolso</button> 
            : 
            <button disabled={isDevolution} onClick={handleClick} className="mx-5 border-gray-950 border-2 px-5 basis-sm font-bold rounded-lg bg-green-700 active:bg-green-600 hover:bg-green-800 text-lg">Re-embolso disponivel</button>}
        </div>
    )
}