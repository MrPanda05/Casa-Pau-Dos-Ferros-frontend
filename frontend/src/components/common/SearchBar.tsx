'use client'
export default function SearchBar(){
    return(
        <div className="grid grid-cols-2 rounded-md">
            <input type="text" className="w-full rounded-md rounded-e-none py-1" placeholder="Search"/>
            <button type="submit" className="bg-amber-600 w-10 rounded-md rounded-s-none hover:bg-amber-700 active:bg-amber-500">Hello</button>
        </div>
    );
}