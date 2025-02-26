'use client'

import { CoockieExist } from "../common/CoockiesManegers"
import { useCart } from "./CartContext"
import { useRouter } from 'next/navigation'

function AddToCartButton({ productId }: {productId: string}){
    const router = useRouter()
    
    const { addToCart } = useCart();
    const Method = async () => {
        const isLogged = await CoockieExist('token');
        if(isLogged){
            addToCart({ productId });
        }
        else{
            router.push('/auth/login');
        }
    }
    return(
        <div className="m-1">
            <button onClick={Method} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                +
            </button>
        </div>
    )
}

function RemoveFromCartButton({ productId }: {productId: string}){
    const router = useRouter();
    const { removeFromCart } = useCart();
    const Method = async () => {
        const isLogged = await CoockieExist('token');
        if(isLogged){
            removeFromCart({ productId });
        }
        else{
            router.push('/auth/login');
        }
    }
    return(
        <div className="m-1">
            <button onClick={Method} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                -
            </button>
        </div>
    )
}


export {AddToCartButton, RemoveFromCartButton}