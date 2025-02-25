'use client'

import { useCart } from "./CartContext";

export default function CartCount(){
    const { cartCount } = useCart();
    return(
        <div>{cartCount}</div>
    )
}