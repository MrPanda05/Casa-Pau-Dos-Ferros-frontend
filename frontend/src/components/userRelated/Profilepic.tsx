'use client'
import Image from "next/image"


export default function Profilepic() {

    return (
        <div className="rounded-full overflow-hidden border-4 border-white w-40 h-40">
            <Image src='/userpic.png' alt="profile pic" width={200} height={200} className="w-full h-full object-cover text-center"/>
        </div>
    )
}