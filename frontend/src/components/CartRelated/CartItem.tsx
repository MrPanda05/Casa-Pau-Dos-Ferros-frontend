import Link from "next/link";
import Image from "next/image";
export default function CartItem({product_id, quantity, price, name, base64_image} : {product_id: string, quantity: string, price: string, name: string, base64_image: string}) {
    return(
        <div className="flex flex-col bg-blue-200 text-black text-center  border-gray-950 border-4 rounded-md">
            <h1 className="font-bold">
                <Link href={`/loja/item/${product_id}`} className="self-center">
                    {name}
                </Link>
            </h1>
            <Link href={`/loja/item/${product_id}`} className="self-center">
                <Image
                    src={`data:image/png;base64,${base64_image}`}
                    alt="product image"
                    height="0"
                    width="0"
                    style={{ width: "200px", height: "200px", overflow: "clip" }}
                    placeholder="blur"
                    blurDataURL="/donaldotrumpete.jpg"
                />
            </Link>
            <div className="flex flex-row justify-center gap-14">
                <div className="font-bold text-sm">Quantidade: {quantity}</div>
                <div className="font-bold text-sm">R${Number(price) * Number(quantity)}</div>
            </div>
        </div>
    )
}