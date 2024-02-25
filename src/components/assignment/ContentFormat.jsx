import React from 'react'
import { VscCircleLargeFilled } from 'react-icons/vsc'

const ContentFormat = (props) => {
    return (
        <div className="border-2 border-slate-500 w-80 grid rounded-md">
            <div className="flex mr-2 h-10 justify-between items-center">
                <div className="flex m-2 space-x-2 ">
                    <VscCircleLargeFilled className="text-slate-700 hover:text-red-600" />
                    <VscCircleLargeFilled className="text-slate-700 hover:text-yellow-600" />
                    <VscCircleLargeFilled className="text-slate-700 hover:text-green-600" />
                </div>
                <h1 className="text-2xl text-gray-500 font-Caveat " >{props.part}</h1>
            </div>
            <div className="border-t-2 border-slate-500 "></div>
            {props.children}
        </div>
    )
}

export default ContentFormat