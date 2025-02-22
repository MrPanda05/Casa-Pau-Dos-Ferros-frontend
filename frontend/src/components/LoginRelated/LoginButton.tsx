import Link from "next/link";

//login button
//Redicrects to the login page
export default  function LoginButton(){

    return(
        <div>
            <Link className="bg-red-600 rounded-md p-1 hover:bg-red-700 active:bg-red-500" href='/auth/login'>Log in</Link>
        </div>
    )
}