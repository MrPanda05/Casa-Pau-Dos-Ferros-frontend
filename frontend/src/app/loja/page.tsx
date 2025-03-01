'use server'
import PaginationButtons from "@/components/common/PaginationButtons";
import CategoriesComp from "@/components/storeRelated/CategoriesComp";
import Item from "@/components/storeRelated/Item";
import { GetAllProducts, IProduct } from "@/components/storeRelated/storeCommons";
export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const searchPage = (await searchParams).page;
  const page = Number(searchPage) || 1;
  const { data } = await GetAllProducts(page)
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
                    Somente os melhores produtos
                  </h1>
                  <div className="grid grid-cols-2 m-1 md:grid-cols-6">
                  {
                    data.results !== undefined ? 
                      data.results?.map((_: IProduct, index: number) => (
                      <div className="m-1" key={index}>
                        <Item product={data.results[index]}/>
                      </div>
                  )): <div className="text-center text-red-800 text-2xl font-bold">Falha ao pegar produtos</div>
                  }
                  </div>
                 <PaginationButtons  currentPage={page} hasNextPage={!!data.next} hasPrevPage={!!data.previous}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
