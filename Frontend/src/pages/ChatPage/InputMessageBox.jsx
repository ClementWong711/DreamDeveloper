import React, { useState } from 'react';
import { BsFillCursorFill } from "react-icons/bs";

const InputMessageBox = ({handleSubmit, setChatmessage, messageValue}) => {
    return (
        <form className="flex justify-between" onSubmit={handleSubmit}>
        <input 
            className="bg-transparent w-[calc(80%)] border border-gray-700 rounded-3xl p-2 focus:outline-none" 
            type="text" 
            placeholder="message" 
            onChange={(e)=> setChatmessage(e.target.value)}
            value={messageValue}
        />
        <button className="flex justify-item-center items-center mr-3 focus:outline-none">
            {React.createElement(BsFillCursorFill, {size: 30})}
        </button>
    </form>
    );
}

export default InputMessageBox;