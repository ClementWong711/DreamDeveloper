import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
    return (
        <div className="flex bg-[#141414] rounded-lg p-2 mb-4">
            {React.createElement(AiOutlineSearch, {size: 20})}
            <input className="bg-transparent ml-2 focus:outline-none" type="text" name="search" placeholder="Search Somebody" />
        </div>
    );
}

export default SearchBox;