import { cookies } from 'next/headers'
import Link from "next/link";

//Cart component

//Show how much items got on it
//Once click, if user is logged go to his cart page, else go to login page
//todo: change to get user id
export default async function CartComp(){
    const cookieStore = await cookies()
    const isLogString = cookieStore.get('isLoged')
    return (
        <div className="grid grid-cols-10">
            <Link href={isLogString?.value === 'true' ? '/user/1/cart' : '/login'} className='flex flex-row items-center'>
                <div className='px-1'>Cart</div>
                <div>0</div>
            </Link>
        </div>
    )
}