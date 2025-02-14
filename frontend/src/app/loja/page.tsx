import CategoriesComp from "@/components/storeRelated/CategoriesComp";
import Item from "@/components/storeRelated/Item";
export default function Page() {
  return (
    <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold">
          Loja
        </h1>
        <div className="h-screem my-1 mx-2">
          <div className="grid grid-cols-6 gap-1 min-h-full">
            <div className="col-start-1 bg-slate-600 rounded-md">
              <CategoriesComp />
            </div>
            <div className="col-start-2 col-span-6 bg-slate-800 rounded-md">
              <div className="m-1">
                <div className="flex flex-col flex-nowrap">
                  <h1 className="font-bold text-lg mt-5 md:text-2xl text-center">
                    Somente os melhores produtoss
                  </h1>
                  <div className="grid grid-cols-2 m-1 md:grid-cols-6">
                  {[...Array(25)].map((_, index) => (
                    <div key={index} className="m-1"><Item price={100} productName={`Product Test ${index}`} productID={index.toString()}/></div>
                ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
