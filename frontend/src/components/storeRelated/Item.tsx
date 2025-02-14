import Image from "next/image"
import Link from "next/link"
export default function Item({productName = 'nullProduct', price, productID}: {productName: string, price:number, productID: string}){
    return(
        <div className="flex flex-col bg-slate-50 text-black text-center border-gray-950 border-4">
            <h1 className="font-bold">
                <Link href={`/loja/item/${productID}`}  className="self-center">
                    {productName}
                </Link>
            </h1>
            <Link href={`/loja/item/${productID}`}  className="self-center">
                <Image src='/donaldotrumpete.jpg' alt="product image" width={100} height={50}/>
            </Link>
            <div className="flex flex-row justify-center gap-14">
                <div>
                    R${price}
                </div>
                <div>
                    1
                </div>
            </div>
            <div className="flex flex-row justify-between font-bold">
                <div className="m-1">
                    <button className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                        -
                    </button>
                </div>
                <div className="m-1">
                    <button className="bg-green-600 hover:bg-green-700 active:bg-green-500 rounded-full p-1 px-4">
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}