import Link from "next/link";

// footer component
export default function Footer(){
    return (
        <footer className="mt-auto bg-purple-950 mx-2 mb-2 p-5 rounded-md">
            <Link href={'/'}>Casa Pau dos ferros</Link>
        </footer>
    )
}