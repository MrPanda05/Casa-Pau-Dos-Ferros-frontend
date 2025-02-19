'use server'
import { cookies } from 'next/headers'

//Test function to set coockies
export async function CoockieSet(coockieName: string, coockieValue: string){
    const cookieStore = await cookies()
    cookieStore.set(coockieName, coockieValue)
}

export async function CoockieGet(coockieName: string,){
    const cookieStore = await cookies()
    return cookieStore.get(coockieName);
}

export async function CoockieDeleter(coockieName: string,){
    const cookieStore = await cookies()
    cookieStore.delete(coockieName);
}


export async function CoockieExist(coockieName: string,){
    const cookieStore = await cookies()
    return cookieStore.has(coockieName);
}
