import React from "react"
import { BsDownload } from "react-icons/bs";
import { types } from "./quotes"
import SocialLinkWithLabel from "./SocialLinkWithLabel ";

function Top() {

    return (
        <div name="/">
            <div className="md:flex-row flex flex-col justify-center  space-x-4">
                <div className="md:w-96 md:h-96 relative w-full h-72 flex justify-center" id="image">
                        <img src="/imgs/profile.png" className="border-0 border-blue-800 h-full shadow-xl shadow-blue-800 rounded-full" alt="user-image" />
                </div>

                <div className="flex flex-col justify-center text-center items-center space-y-3 my-3">
                    <h3 className="text-slate-400 text-2xl ">Hi I'm</h3>
                    <h1 className="text-white text-5xl font-Dirt">ABHIJEET SINGH RANA</h1>
                    <h3 className="text-slate-400 text-2xl md:flex grid">Frontend Developer <span className="text-gray-300 mx-2">|</span> <span className="text-gray-500">Electrical Engineer</span> </h3>
                    <div className="flex justify-center">
                        <a href="/imgs/abhijeet-profile.pdf" download={true} target='_blank' className="border-2 cursor-pointer border-sky-700 hover:bg-fuchsia-300 bg-blue-400 p-2 rounded-md flex items-center space-x-3 w-fit" > <BsDownload className=" text-2xl text-red-600 m-3 mr-3 md:m-px" /> <span className=" text-lg font-Shadows font-bold w-fit text-slate-900 m-3 md:m-px">RESUME</span></a>
                    </div>
                </div>

            </div>

            <div id="social" className="md:ml-96 md:pl-10 h-10 flex justify-center items-center md:space-x-10 space-x-5">
                <SocialLinkWithLabel
                    href="https://instagram.com/am_abhijeet"
                    title="Instagram"
                    icon="instagram"
                    iconName="Instagram"
                />
                <SocialLinkWithLabel
                    href="http://wa.me/+919411387408"
                    title="Whatsapp"
                    icon="whatsapp"
                    iconName="WhatsApp"
                />
                <SocialLinkWithLabel
                    href="https://twitter.com/am_abhijeet_5"
                    title="Twitter"
                    icon="twitter"
                    iconName="Twitter"
                />
                <SocialLinkWithLabel
                    href="https://linkedin.com/in/abhijeet-singh-rana-178a4623a"
                    title="Linkedin"
                    icon="linkedin"
                    iconName="LinkedIn"
                />
                <SocialLinkWithLabel
                    href="https://github.com/abhi-1288"
                    title="Github"
                    icon="github"
                    iconName="Github"
                />
            </div>

            <div id="myQuotes" className="text-center m-4 p-4 " >
                {types}
            </div>

            <div className="grid md:flex justify-center md:space-x-40  p-4 ">



            </div>


        </div>
    )
}

export default Top

function Loading() {
    return <img src="/imgs/image.png" className="border-0 border-blue-800 h-full shadow-xl shadow-blue-800 rounded-full" alt="user-image" />;
}