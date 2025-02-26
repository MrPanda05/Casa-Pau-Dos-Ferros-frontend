'use client'

import { useEffect, useState } from "react";
import { useCart } from "./CartContext"
import { useRouter } from 'next/navigation'
import { CoockieExist } from "../common/CoockiesManegers";


function AddToCartButton({ productId }: {productId: string}){
    const [isLoged, setIsLoged] = useState(false);
    const router = useRouter()

    useEffect(() => {
        async function checkToken() {
            const token = await CoockieExist('token');
            if (token) {
                setIsLoged(true);
            }
        }
        checkToken();
    }, [setIsLoged])

    let method;
    if(isLoged){
        method = () => addToCart({ productId });
    }
    else{
        method = () => router.push('/auth/login');
    }
    const { addToCart } = useCart();
    return(
        <div className="m-1">
            <button onClick={method} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                +
            </button>
        </div>
    )
}

function RemoveFromCartButton({ productId }: {productId: string}){
    const [isLoged, setIsLoged] = useState(false);
    const router = useRouter()

    useEffect(() => {
        async function checkToken() {
            const token = await CoockieExist('token');
            if (token) {
                setIsLoged(true);
            }
        }
        checkToken();
    }, [setIsLoged])

    let method;
    if(isLoged){
        method = () => removeFromCart({ productId });
    }
    else{
        method = () => router.push('/auth/login');
    }
    const {removeFromCart} = useCart();
    return(
        <div className="m-1">
            <button onClick={method} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                -
            </button>
        </div>
    )
}


export {AddToCartButton, RemoveFromCartButton}