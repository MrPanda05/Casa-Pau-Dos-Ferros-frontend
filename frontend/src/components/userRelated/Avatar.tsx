'use client'
import { useState } from "react";
import ProfilePicForm from "./ProfilePicForm"
import Profilepic from "./Profilepic"


export default function Avatar(){
    //fix this
    const [inputValue, setInputValue] = useState("MqVtSFX");

    //maybe merge this two?
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value); // Capture the new input value
        localStorage.setItem("profileUrl", e.target.value);
      };

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log(inputValue)
      }


    return(
        <div className="grid grid-rows-2">
            <div className="flex justify-center mb-10">
                <Profilepic imageurl={inputValue}/>
            </div>
            <div className="px-10">
                <ProfilePicForm onSubmit={handleSubmit} onChange={handleInputChange}/>
            </div>
        </div>
    )
}