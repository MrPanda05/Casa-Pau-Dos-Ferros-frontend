'use client'
import { useRouter } from "next/navigation"

export default function RedirectButton({href, text} : {href: string, text: string}) {
    const router = useRouter()
    return (
        <button className="blueButton" onClick={() => router.push(href)}>{text}</button>
    )
}