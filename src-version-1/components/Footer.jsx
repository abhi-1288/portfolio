import React, { useEffect, useState } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Footer (props){

    const [year, setYear] = useState("")
    

    useEffect(() => {
      setYear(new Date().getFullYear())
    }, [])
    

    return(
        <div className="mb-8">
            
            <div className="flex items-center space-x-2 justify-center">
            <AiOutlineCopyrightCircle className="text-2xl text-white"/>
            <button onClick={() => {props.setCopyright(true)}} className="text-2xl cursor-pointer underline text-white font-Satisfy">COPYRIGHT 2022 - <span>{year}</span> </button>
            </div>
            
        </div>
    )
}

export default Footer