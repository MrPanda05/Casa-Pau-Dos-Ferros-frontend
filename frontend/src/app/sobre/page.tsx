import Image from "next/image";

export default function Page(){
    return(
        <div className="grid grid-rows-3">
            <h1 className="text-3xl m-10 text-center">
                Sobre
            </h1>
            <div className="text-center flex flex-row justify-center">
                <div className="self-center m-5">
                    A casa pau dos ferros foi fundada por Donaldo Joao trumpete em 1823
                </div>
                <Image src='/donaldotrumpete.jpg' width={100} height={100} alt="donaldo joao trumpete imagen" className="self-end m-5"/>
            </div>
            <div className="text-center">
                A historia da casa pau dos ferros e muito interessante, pois ela foi fundada por um homem que vendeu o mundo
            </div>
        </div>
    )
}