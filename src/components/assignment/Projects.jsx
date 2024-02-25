import React from "react";
import ContentFormat from "./ContentFormat";

function Projects() {
    return (
        <div name="assignments">
            <h1 className="md:text-8xl text-4xl text-slate-300 text-center font-RalewayDot">ASSIGNMENTS</h1>

            <div className="grid md:flex justify-center md:space-x-3 space-y-3 my-4">

                <ContentFormat part="part-1">
                    <div className="grid justify-center text-xl items-center space-y-3  font-Pacifico text-sky-500 h-auto">
                        <h1>1. <a className="underline" target="_blank" href="https://assignment-1-abhijeet-singh5.codeyogi-batch-2.repl.co/">CodeYogi Clone UI</a></h1>
                        <h1>2. <a className="underline" target="_blank" href="https://assignment-3-abhijeet-singh5.codeyogi-batch-2.repl.co/">Travel Guide</a></h1>
                        <h1>3. <a className="underline" target="_blank" href="https://assignment-14-abhijeet-singh5.codeyogi-batch-2.repl.co/">Table Assignment</a></h1>
                        <h1>4. <a className="underline" target="_blank" href="https://assignment-7-abhijeet-singh5.codeyogi-batch-2.repl.co/">Form-Page </a>responsive</h1>
                        <h1>5. <a className="underline" target="_blank" href="https://assignment-10-abhijeet-singh5.codeyogi-batch-2.repl.co/">Appoinment Schedule </a></h1>
                        <h1>6. <a className="underline" target="_blank" href="https://assignment-23-abhijeet-singh5.codeyogi-batch-2.repl.co/">TO-DO in TYPE-SCRIPT </a>REACT</h1>
                        <h1>7. <a className="underline" target="_blank" href="https://mui-site.vercel.app/">Weather App & more</a></h1>
                    </div>
                </ContentFormat>

                <ContentFormat part="part-2">
                    <div className="grid justify-center text-xl items-center space-y-3 font-Pacifico text-sky-500 h-auto">

                        <h1>1. <a className="underline" target="_blank" href="https://assignment-17-abhijeet-singh5.codeyogi-batch-2.repl.co/">Unit Converter</a></h1>
                        <h1>2. <a className="underline" target="_blank" href="https://assignment-18-abhijeet-singh5.codeyogi-batch-2.repl.co/">Table Assignment </a>New One</h1>
                        <h1>3. <a className="underline" target="_blank" href="https://assignment-19-abhijeet-singh5.codeyogi-batch-2.repl.co/">Prime Number</a></h1>
                        <h1>4. <a className="underline" target="_blank" href="https://assignment-21-abhijeet-singh5.codeyogi-batch-2.repl.co/">Table Assignment</a> VIA REACT</h1>
                        <h1>5. <a className="underline" target="_blank" href="https://we-shop.netlify.app/">E-Commerse Site</a> VIA REACT</h1>
                        <h1>6. <a className="underline" target="_blank" href="https://class-based-todo.netlify.app/">TO-DO in TYPE-SCRIPT REACT </a> Class-Based COMPONENT</h1>
                        <h1>7. <a className="underline" target="_blank" href="https://resume-creater.vercel.app/">Resume Builder For Beginners </a></h1>
                        <h1>8. <a className="underline" target="_blank" href="https://todo-vanced.vercel.app/">Advanced Todo "LIKE TRELLO"  </a>Desktop site</h1>
                    </div>
                </ContentFormat>
            </div>


        </div>
    )
}

export default Projects
