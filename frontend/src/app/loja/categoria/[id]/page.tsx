import PaginationButtons from "@/components/common/PaginationButtons";
import CategoriesComp from "@/components/storeRelated/CategoriesComp";
import Item from "@/components/storeRelated/Item";
import { GetCategoryNameByID, GetProductByCategory, IProduct } from "@/components/storeRelated/storeCommons";

// import { AddToCartButton, RemoveFromCartButton } from "@/components/CartRelated/CartButtons";
// import Image from "next/image";

export default async function Page({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const id = (await params).id;
    const searchParamsObj = await searchParams; // Await searchParams
    const page = searchParamsObj?.page ? Number(searchParamsObj.page) : 1;
    const { data } = await GetProductByCategory(id, page);
    const category = await GetCategoryNameByID(id);
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-2xl font-bold">Loja</h1>
            <div className="h-screem my-1 mx-2">
                <div className="grid grid-cols-6 gap-1 min-h-full">
                    <div className="col-start-1 bg-slate-600 rounded-md">
                        <CategoriesComp />
                    </div>
                    <div className="col-start-2 col-span-6 bg-slate-800 rounded-md">
                        <div className="m-1">
                            <div className="flex flex-col flex-nowrap">
                                <h1 className="font-bold text-lg mt-5 md:text-2xl text-center">
                                    Somente os melhores {category.data}s
                                </h1>
                                <div className="grid grid-cols-2 m-1 md:grid-cols-6">
                                    {
                                        data.results !== undefined ?
                                        data.results.map((_: IProduct, index: number) => (
                                        <div className="m-1" key={index}>
                                        <Item product={data.results[index]} />
                                        </div>
                                        
                                    )) : <div className="text-center text-red-800 text-2xl font-bold">Falha ao pegar produtos</div>
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
