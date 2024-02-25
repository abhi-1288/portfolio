import React from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";

function Skills (){
    return(
        <div name="skills">
            <h1 className="md:text-9xl text-5xl text-slate-300 text-center font-RalewayDot">SKILLS</h1>
            
            <div className="flex justify-center my-4">
                <div className="border-2 border-slate-500 w-80 grid rounded-md">
                    <div className="flex mr-2 h-10 items-center">
                        <div className="flex m-2 space-x-2 ">
                            <VscCircleLargeFilled className="text-slate-700 hover:text-red-600" />
                            <VscCircleLargeFilled className="text-slate-700 hover:text-yellow-600" />
                            <VscCircleLargeFilled className="text-slate-700 hover:text-green-600" />
                        </div>
                        <h1 className="text-2xl text-gray-500 font-Caveat " >Frontend Developer</h1>
                    </div>
                    
                    <div className="border-t-2 border-slate-500 "></div>

                    <div className="grid justify-center text-xl items-center font-Pacifico text-sky-500 h-auto">
                        <h1>HTML & CSS</h1>
                        <h1>TAILWIND CSS</h1>
                        <h1>JAVA-SCRIPT</h1>
                        <h1>REACT</h1>
                        <h1>TYPE-SCRIPT</h1>
                        <h1></h1>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Skills