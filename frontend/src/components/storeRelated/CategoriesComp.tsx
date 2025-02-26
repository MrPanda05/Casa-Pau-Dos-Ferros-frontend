"use server";
import Link from "next/link";
import { GetCategories, ICategory } from "./storeCommons";
export default async function CategoriesComp() {
    const { data } = await GetCategories();
    //console.log(data.results)
    return (
        <div className="flex flex-col justify-center gap-1">
            <h1 className="text-sm text-center font-bold mt-5 md:text-2xl">Categoria</h1>
            <div className="grid flex-row text-center gap-2 my-2">
                {data.results.map((_: ICategory, index: number) => (
                    <Link
                        href={`/loja/categoria/${data.results[index].category_id}`}
                        className="text-sm md:text-lg"
                        key={index}
                    >
                        Categoria {data.results[index].name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
