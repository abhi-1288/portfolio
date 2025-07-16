import React from "react";
import ContentFormat from "./ContentFormat";

function Projects() {
    return (
        <div name="assignments">
            <h1 className="md:text-8xl text-4xl text-slate-300 text-center font-RalewayDot">ASSIGNMENTS</h1>

            <div className="grid md:flex justify-center md:space-x-3 space-y-3 my-4">

                <ContentFormat part="part-1">
                    <div className="grid h-fit text-xl space-y-3 font-Pacifico text-sky-500 p-2">
                        <h1>1. <a className="underline" target="_blank" href="https://mui-site.vercel.app/">Weather App & more</a></h1>
                        <h1>1. <a className="underline" target="_blank" href="https://app-qr-code.vercel.app/">QR App- Full Stack</a></h1>
                    </div>
                </ContentFormat>

                <ContentFormat part="part-2">
                    <div className="grid h-fit text-xl space-y-3 font-Pacifico text-sky-500 p-2">

                        <h1>1. <a className="underline" target="_blank" href="https://class-based-todo.netlify.app/">TO-DO in TYPE-SCRIPT REACT </a> Class-Based COMPONENT</h1>
                        <h1>2. <a className="underline" target="_blank" href="https://resume-creater.vercel.app/">Resume Builder For Beginners </a></h1>
                        <h1>3. <a className="underline" target="_blank" href="https://todo-vanced.vercel.app/">Advanced Todo "LIKE TRELLO"  </a>Desktop site</h1>
                    </div>
                </ContentFormat>
            </div>


        </div>
    )
}

export default Projects
