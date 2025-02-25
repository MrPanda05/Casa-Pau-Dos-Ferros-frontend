'use client'

import { useCart } from "./CartContext"

function isLogged(){
    
}


function AddToCartButton({ productId }: {productId: string}){
    const { addToCart } = useCart();
    return(
        <div className="m-1">
            <button onClick={() => addToCart({ productId })} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                +
            </button>
        </div>
    )
}

function RemoveFromCartButton({ productId }: {productId: string}){
    const {removeFromCart} = useCart();
    return(
        <div className="m-1">
            <button onClick={() => removeFromCart({ productId })} className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                -
            </button>
        </div>
    )
}


export {AddToCartButton, RemoveFromCartButton}