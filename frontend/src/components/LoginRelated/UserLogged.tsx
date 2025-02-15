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
                const userId = await CoockieGet("userId")
                setuserURL(`/user/${userId?.value}`)
            }else{
                setuserURL('/auth/login')
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