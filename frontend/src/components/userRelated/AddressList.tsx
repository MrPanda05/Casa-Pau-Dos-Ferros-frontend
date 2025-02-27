'use client'
import { useEffect, useState } from "react"
import { GetMyAdress, IAddress } from "./userCommons"
import SinglyAdress from "./SinglyAdress"

export default function AddressesList(){
    const [addresses, setAddresses] = useState<IAddress[]>([])

    useEffect(() => {
        try {
            const result =  async () => {
            const {data} = await GetMyAdress()
            setAddresses(data.results)
            console.log(data)
            }
            result()
        } catch (error) {
            console.log(error)
        }
    }, [])
    //todo improve ui of this
    return(
        <div className="size-full flex flex-col">
            <h1 className="mt-5 text-2xl font-bold text-center">Endereços</h1>
            <div className="full-size">
                <div className="grid grid-cols-3 gap-28 m-1 text-center justify-center">
                    {addresses !== undefined ? addresses.map((_: IAddress, index: number) => (
                        <SinglyAdress key={index} cep={addresses[index].cep} address_id={addresses[index].address_id} city={addresses[index].city} number={addresses[index].number}
                        state={addresses[index].state} street={addresses[index].street}/> 
                    )): <div className="self-center justify-self-center place-self-center">Nenhum endereco registrado</div>}
                </div>
            </div>
        </div>
    )
}