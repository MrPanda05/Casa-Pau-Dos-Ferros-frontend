import Link from "next/link"
export default function CategoriesComp(){
    return(
        <div className="flex flex-col justify-center gap-1">
            <h1 className="text-sm text-center font-bold mt-5 md:text-2xl">
                Categoria
            </h1>
            <div className="grid flex-row text-center gap-2 my-2">
                {[...Array(25)].map((_, index) => (
                    <Link href={`/loja/categoria/${index}`} className="text-sm md:text-lg" key={index}>Categoria {index}</Link>
                    //Get categories via fetch on server side
                    //max should be 25
                ))}
            </div>
        </div>
    )
}