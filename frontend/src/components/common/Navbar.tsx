import Link from "next/link"

/// Navbar component
export default function Navbar() {
    return(
        <div className="rounded-md rounded-t-none grid grid-cols-2 content-stretch">
            <Link className="hover:border hover:border-fuchsia-950 rounded-md bg-cyan-500 rounded-t-none rounded-r-none hover:underline font-bold text-xl" href={'/loja'}>
                <p className="mt-4">
                    Produtos
                </p>
            </Link>
            <Link className="hover:border hover:border-fuchsia-950 rounded-md bg-cyan-500 rounded-t-none rounded-l-none hover:underline font-bold text-xl" href={'/sobre'}>
                <p className="mt-4">
                    Sobre
                </p>
            </Link>
        </div>
    )
}