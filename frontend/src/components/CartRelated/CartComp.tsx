import Link from "next/link";
import { CoockieExist, CoockieGet } from '../common/CoockiesManegers';

//Cart component

//Show how much items got on it
//Once click, if user is logged go to his cart page, else go to login page
//todo: change to get user id
export default async function CartComp(){
    const isLoged = await CoockieExist("token")
    let userId;
    if(isLoged){
        userId = await CoockieGet("userId")
    }
    return (
        <div className="grid grid-cols-10">
            <Link href={isLoged? `/user/${userId?.value}/cart` : '/auth/login'} className='flex flex-row items-center'>
                <div className='px-1'>Cart</div>
                <div>0</div>
            </Link>
        </div>
    )
}