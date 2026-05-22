import React from 'react'

const Button = (props) => {
  return (
    <div target='_blank' className="border-2 cursor-pointer border-sky-700 hover:bg-fuchsia-300 bg-blue-400 p-2 rounded-md flex items-center space-x-3 w-fit">
        {props.chlidren}
    </div>
  )
}

export default Button