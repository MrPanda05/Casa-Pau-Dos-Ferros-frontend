import Image from "next/image"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    //fetch product here
    return (
      <div className="grid grid-row-2 justify-center gap-10 text-black">
        <h1 className="text-2xl font-bold text-center">
          I am producto
        </h1>
        <div className="bg-white size-[50rem] mb-10 grid grid-rows-3 justify-center">
          <h1 className="font-bold text-2xl">
            Product name {id}
          </h1>
          <Image src='/donaldotrumpete.jpg' alt="product image" width={200} height={100}/>
        <div className="flex flex-row justify-center gap-14">
                <div>
                    R${10000}
                </div>
                <div>
                    1
                </div>
            </div>
            <div className="flex flex-row justify-between font-bold ">
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
      </div>)
  }