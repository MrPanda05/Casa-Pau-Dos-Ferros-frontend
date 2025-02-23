'use client'

import AddCategoryToProductForm from "@/components/adminRelated/AddCategoryToProductForm";

export default function Page() {
    return (
      <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-center font-bold text-red-200 text-base">
            Adcionar categoria em um produto
          </h1>
          <div className="grid grid-flow-row  bg-slate-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
            <AddCategoryToProductForm />
          </div>
      </div>
    );
  }
  