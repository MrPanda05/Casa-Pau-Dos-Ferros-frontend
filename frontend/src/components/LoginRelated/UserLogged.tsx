'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { CoockieExist, CoockieGet } from "../common/CoockiesManegers"

// UserLogged component
//Used when user is logged and redicts to user profile

//todo: make href dynamic
export default function UserLogged(){
    const [userURL, setuserURL] = useState('/auth/login')
    useEffect(() => {
        const checkUserLogged = async () => {
            const isUserLoged = await CoockieExist("token");
            if(isUserLoged){
                const username = await CoockieGet("username")
                setuserURL(`/user/${username?.value}`)
            }
        };
        checkUserLogged();
    })
    return(
        <div>
            <Link href={`${userURL}`}>My perfil</Link>
        </div>
    )
}