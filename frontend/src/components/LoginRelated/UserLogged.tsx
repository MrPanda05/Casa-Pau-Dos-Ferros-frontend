'use client'
import Link from "next/link"
// UserLogged component
//Used when user is logged and redicts to user profile

//todo: make href dynamic
export default function UserLogged(){

    return(
        <div>
            <Link href={`/user/perfil`}>My perfil</Link>
        </div>
    )
}