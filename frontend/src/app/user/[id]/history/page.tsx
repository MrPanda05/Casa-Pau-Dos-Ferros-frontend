'use server'

import { GetMyOrderHistory, IHistoryOrder } from "@/components/CartRelated/cartCommons";
import HistoryItem from "@/components/CartRelated/HistoryItem";
import { CoockieExist, CoockieGet } from "@/components/common/CoockiesManegers";
import { redirect } from "next/navigation";
export default async function Page( { params }: { params: { id: string } }) {

    const {data} = await GetMyOrderHistory()

    const coockieId = await CoockieGet("userId");
        const token = await CoockieExist("token");
        if (!token) {
            redirect("/auth/login");
        }
        if(params.id !== coockieId?.value){
            redirect(`/user/${coockieId?.value}/history`)
        }
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-slate-600 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6 text-black">Minhas compras passadas</h1>
          <div className="bg-slate-700 w-full max-h-[80vh] overflow-y-auto rounded-lg">
            <div className="flex flex-col justify-center items-center p-4 gap-3">
              {data !== undefined && data.length > 0 ? (
                data.map((_: IHistoryOrder, index: number) => (
                    data[index].status === 1 && <HistoryItem key={index} order_id={data[index].order_id} cart={data[index].cart} user_address={data[index].user_address} payment_method={data[index].payment_method}
                    total={data[index].total} status={data[index].status}
                    />
                ))
              ) : (
                <div className="py-8 text-gray-500">Você não fez compras ainda</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  