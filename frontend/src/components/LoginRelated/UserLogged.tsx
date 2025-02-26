"use client";
import {  CoockieExist, CoockieGet } from "../common/CoockiesManegers";
import { useRouter } from "next/navigation";

// UserLogged component
//Used when user is logged and redicts to user profile

//todo: make href dynamic
export default function UserLogged() {
    const router = useRouter();
    const Method = async () => {
        const isLogged = await CoockieExist('token');
        if(isLogged){
            const userId = await CoockieGet('userId');
            router.push(`/user/${userId?.value}`);
        }
        else{
            router.push('/auth/login');
        }
    }
    return (
        <div>
            <button onClick={Method} className="bg-purple-600 rounded-md p-1 hover:bg-purple-700 active:bg-purple-500">Meu Perfil</button>
        </div>
    );
}
