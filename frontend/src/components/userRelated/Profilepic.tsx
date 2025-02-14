'use client'
import Image from "next/image"
import { useEffect, useState } from 'react';


export default function Profilepic({imageurl = 'MqVtSFX'}: {imageurl: string}) {
    const [currentUrl, setCurrentUrl] = useState(imageurl);
    useEffect(() => {
        const savedUrl = localStorage.getItem("profileUrl");
        if(savedUrl){
            setCurrentUrl(savedUrl);
        }else{

            setCurrentUrl(imageurl);
        }
    }, [imageurl]); 

    return (
        <div className="rounded-full overflow-hidden border-4 border-white w-40 h-40">
            <Image key={imageurl} src={`https://i.imgur.com/${currentUrl}.png`} alt="profile pic" width={200} height={200} className="w-full h-full object-cover text-center"/>
        </div>
    )
}