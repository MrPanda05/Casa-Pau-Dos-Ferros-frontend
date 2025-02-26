"use client";

import { useEffect } from "react";
import { useCart } from "./CartContext";

export default function CartCount() {
    const { cartCount } = useCart();
    const { getTotalCartCount } = useCart();
    useEffect(() => {
        const updateCoung = async () => {
            await getTotalCartCount();
        };
        updateCoung();
    }, [getTotalCartCount]);
    return <div>{cartCount}</div>;
}
