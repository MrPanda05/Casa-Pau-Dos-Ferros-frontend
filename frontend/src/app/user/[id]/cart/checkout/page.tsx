'use client'

import CheckoutForm from "@/components/CartRelated/CheckoutForm";

export default function Page() {
  //todo improve ui
  return (
    <div className="size-full flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-2xl">Confirmar compras</h1>
        <div className="bg-gray-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
            <CheckoutForm />
        </div>
    </div>
  );
}
