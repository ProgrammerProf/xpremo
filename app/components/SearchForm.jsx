"use client";
import { useState } from "react";

export default function SearchForm() {

    const [query, setQuery] = useState("");
        
    return (

        <form>
            
            <div className="inp-search relative rounded-[30px] overflow-hidden">

                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="ابحث عن طلبك ..." className="max-[800px]:py-2 w-full py-3 pl-[130px] max-[800px]:pl-[110px] pr-8 rounded-[30px] border border-black focus:outline-none"/>
                
                <button className="absolute top-0 left-0 bg-black w-[120px] max-[800px]:w-[100px] h-full text-white">
                    بحث
                </button>

            </div>

        </form>

    );

}
