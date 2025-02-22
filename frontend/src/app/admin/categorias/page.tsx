'use client'
import AddCategoryForm from "@/components/adminRelated/AddCategoryForm";

export default function Page() {
  
    return (
      <div className="flex-1 flex flex-col justify-center h-full">
                <h1 className="text-center font-bold text-red-200 text-base">
                  Adcionar produto
                </h1>
                <div className="grid grid-flow-row  bg-slate-800 size-full rounded-md overflow-scroll overflow-x-hidden justify-center">
                  <AddCategoryForm />
                </div>
            </div>
    );
  }
  