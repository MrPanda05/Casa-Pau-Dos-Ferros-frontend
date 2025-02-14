'use client'

interface IFormHelper{
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfilePicForm({onSubmit, onChange} : IFormHelper){
    return(
        <form className="flex flex-col" onSubmit={onSubmit}>
                <input placeholder="URL" type="text" className=" m-1 py-2 px-2 -mx-10 rounded-md text-black" value={`${localStorage.getItem("profileUrl")}`} onChange={onChange}/>
                <input value="Change" type="submit" className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-400 rounded-md mt-5 shrink-10 mx-10"/>
        </form>
    )
}