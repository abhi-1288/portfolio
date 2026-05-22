import React, { useState } from "react";
import { CgChevronUp, CgMenu } from "react-icons/cg";
import {Link} from "react-scroll";

function Nav (){

    const [menu, setMenu] = useState(false)
    const menuIcon = <CgMenu className="text-rose-500 hover:text-sky-500 md:text-3xl text-2xl"/>
    const closeIcon = <CgChevronUp className="text-rose-500 hover:text-sky-500 md:text-3xl text-2xl"/>

    let LINKS = [
        {name: "HOME", link: "/",},
        {name: "SKILLS", link: "skills",},
        {name: "ASSIGNMENTS", link: "assignments",},
        {name: "CONTACT", link: "contact",},
    ]



    return(
        <div>
            <nav className="md:flex items-center  md:m-auto bg-slate-900 md:opacity-100 bg-opacity-60 py-4 justify-between  " >
                <span>
                    <h1 className="text-2xl md:text-4xl text-rose-500 font-Dirt m-2 ">Port<span className="font-Marker text-sky-500">Folio</span> </h1>
                </span>
                    <div className="absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setMenu(!menu)} >
                        {menu ? closeIcon : menuIcon }
                    </div>
                    <ul className={`md:flex md:space-x-4 md:w-auto md:pb-0 md:static md:bg-transparent md:z-auto bg-slate-900 bg-opacity-60 w-full absolute mx-auto z-[-1] text-end items-center justify-center p-3 text-sky-400 font-Marker mr-3 pb-12 transition-all duration-700 ease-in ${menu ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-80 `}>
                        {
                            LINKS.map((link, index) => {
                                return (
                                    <li key={index} className="my-7 md:ml-8 md:my-0 cursor-pointer">
                                        <Link onClick={()=>setMenu(false)} className="hover:italic hover:text-rose-500 duration-500" to={link.link} smooth={true} offset={-100} duration={2500} >{link.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 
            </nav>

        </div>
    )
}

export default Nav