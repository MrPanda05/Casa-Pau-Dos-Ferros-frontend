import Link from "next/link";
import LoginButton from "../LoginRelated/LoginButton";
import UserLogged from "../LoginRelated/UserLogged";
import Navbar from "./Navbar";
import CartComp from "../CartRelated/CartComp";
import { CoockieExist} from "./CoockiesManegers";

// Header component
export default async function Header(){
    const isLoged = await CoockieExist("token")
    return(
        <header className="grid grid-rows-2 text-center mx-2 text-zinc-950 ">
            <div className="grid grid-cols-2 gap-10 md:gap-52 py-3 bg-cyan-200 rounded-md rounded-b-none pt-5">
                <div>
                    <Link href={'/'} className="font-bold text-lg">Casa pau dos ferros</Link>
                </div>
                <div>
                    <div className="grid grid-cols-2">
                        <CartComp />
                        {isLoged ? <UserLogged /> : <LoginButton />}
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
}