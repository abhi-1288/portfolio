import React from "react";
import { FiMail, FiPhone } from "react-icons/fi"

function Contact (){
    const CONTACT = [
        {name:"MAIL", link:"mailto:abhijeet.singh.rana@outlook.com", icon:<FiMail className="text-3xl text-rose-500"/>},
        {name:"CALL", link:"tel:+91-9411387408", icon:<FiPhone className="text-3xl text-rose-500"/>},
    ]
    return(
        <div name="contact">
            <h1 className="md:text-9xl text-5xl text-slate-300 text-center font-RalewayDot">CONTACT</h1>
            <div className="md:flex-row flex flex-col md:space-x-8 justify-center my-8 items-center ">

                {
                    CONTACT.map((item, index) => {
                        return(
                            <div key={index} className=" md:hover:animate-pulse my-4">
                                <a className="flex flex-col justify-center items-center" href={item.link}>{item.icon}
                                <p className="text-xl text-sky-500 items-center">{item.name}</p></a>
                            </div>)
                    })
                }

                {/* <div className="flex flex-col items-center md:hover:animate-pulse my-4">
                    <a href="mailto:abhijeetsinghrana2003@gmail.com"><FiMail className="text-3xl text-rose-500"/>
                    <p className="text-xl text-sky-500 items-center">MAIL</p></a>
                </div>

                <div className="flex flex-col items-center md:hover:animate-pulse my-4">
                <a href="tel:+91-9411387408"><FiPhone className="text-3xl text-rose-500"/>
                    <p className="text-xl text-sky-500 items-center">CALL</p></a>
                </div> */}


            </div>
            
        </div>
    )
}

export default Contact