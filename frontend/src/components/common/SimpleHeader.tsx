import Link from "next/link";
export default function SimpleHeader(){
    return(
        <header className="text-center mx-2 my-2 flex justify-center">
            <Link href={'/'} className="font-bold text-lg text-white bg-cyan-400 rounded-md w-64 hover:bg-cyan-500 active:bg-cyan-300">Casa pau dos ferros</Link>
        </header>
    );
}