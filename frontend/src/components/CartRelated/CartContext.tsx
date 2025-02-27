'use client'
import { createContext, useContext, useState, ReactNode } from "react";
import { AddMyCart, DeleteMyCartItem, GetMyCart, ICartItem, UpdateMyCartId } from "./cartCommons";

  type CartContextType = {
    addToCart: ({ productId }: { productId: string }) => Promise<void>;
    removeFromCart: ({ productId }: { productId: string }) => Promise<void>
    getTotalCartCount: () => Promise<void>;
    clearCount: () => void;
    cartCount: number;
  };


const CartContext = createContext<CartContextType | undefined>(undefined);
//todo save getcart on cache
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0)
  
  const addToCart = async ({ productId }: {productId: string}) => {
    try {
      setCartCount( (prev) => prev + 1)
      console.log(productId);
      const {data} = await GetMyCart();
      if(data.results === undefined){
        const res = await AddMyCart(productId);
        console.log(res.data)
        console.log(res.status)
        if(res.status < 200 || res.status >= 300){
          setCartCount( (prev) => prev - 1)
        }
        return;
      }
      const result = data.results.filter((x: ICartItem) => x["product"].toString() === productId.toString())// killing myself with this one
      console.log(result)
      if(result.length === 0){
        const res = await AddMyCart(productId);
        console.log(res.data)
        console.log(res.status)
        if(res.status < 200 || res.status >= 300){
          setCartCount( (prev) => prev - 1)
        }
      }
      else{
        const res = await UpdateMyCartId(result[0], result[0].quantity + 1);
        console.log(res.data)
        console.log(res.status)
        if(res.status < 200 || res.status >= 300){
          setCartCount( (prev) => prev - 1)
        }
      }
    } catch (error) {
      console.log(error)
      setCartCount( (prev) => prev - 1)
    }
  }
  const removeFromCart = async ({ productId }: {productId: string}) => {
    try {
      const { data } = await GetMyCart();
      if(data.results === undefined) return;
      const result = data.results.filter((x: ICartItem) => x["product"].toString() === productId.toString());
      setCartCount((prev) => (prev <= 0) ? prev : prev-1);
      if (result.length > 0) {
        if (result[0].quantity > 1) {
          const res = await UpdateMyCartId(result[0], result[0].quantity - 1);
          if (res.status < 200 || res.status >= 300) {
            setCartCount((prev) => prev + 1);
          }
        } else {
          const res = await DeleteMyCartItem(result[0]);
          if (res.status < 200 || res.status >= 300) {
            setCartCount((prev) => prev + 1);
          }
        }
      }
    } catch (error) {
      console.log(error);
      setCartCount((prev) => prev + 1);
    }
  }

  const getTotalCartCount = async () => {
    const {data} = await GetMyCart();
    if(data.results === undefined) return;
    let count = 0;
    data.results.forEach((element: ICartItem) => {
      count += Number(element.quantity);
    });
    setCartCount(count);
  }

  const clearCount = () => {
    setCartCount(0);
  }

    return (
      <CartContext.Provider
        value={{
          addToCart,
          removeFromCart,
          getTotalCartCount,
          clearCount,
          cartCount,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
  };