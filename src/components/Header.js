import React, {useState, useContext} from "react";
import headerImg from "../img/header.png";
import { InputContext } from "../App";

const Header = () => {
    const [value, setValue] = useState("");
    
    const { inputValue, setInputValue } = useContext(InputContext);
    
    const handleInputChange = (e) => setValue(e.target.value);
    // click the submit button
    const handleSubmit =() => {
        setInputValue(value);
        setValue("");
    }
    //the same with the enter key 
    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter') {
            setInputValue(value);
            setValue(""); 
        }
    }
    
    
    return (
        <div
            style={{
                backgroundImage: `url(${headerImg})`,
            }}
        >
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold text-center text-white">
                    Bibimoni Dictionary
                </h1>
                <p className="text-center mt-1 mb-10 text-slate-300">
                    Find definitions for every of your words
                </p>

                <div className="flex items-center justify-center mt-5">
                    <div className="flex border-2 border-gray-200 rounded">
                        <input
                            type="search"
                            className="lensinput px-4 py-2 md:w-80"
                            placeholder="Search for..."
                            onKeyDown={handleInputKeyDown}
                            onChange={handleInputChange}
                            class="placeholder:italic placeholder:text-slate-400 py-2 pl-4 pr-3 shadow-sm focus:outline-none"
                        />
                        <button className="bg-green-700 border-l px-4 py-2 text-white" onClick={handleSubmit}>
                            Enter
                        </button>
                    </div>
                </div>

                { inputValue && (
                    <h2 className="text-gray-50 text-center mt-4">
                        Result for: <span className="text-white font-bold">{inputValue}</span>
                    </h2>
                )}
            </div>
        </div>
    );
};

export default Header;
