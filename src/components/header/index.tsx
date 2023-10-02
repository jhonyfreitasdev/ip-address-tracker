import { useContext, useState } from "react";

import { IpContext } from "../../context/ip-value-context";
import iconArrow from "../../assets/images/icon-arrow.svg"

import "./index.sass";

export const Header: React.FC = () => {
    const { setInputValue } = useContext(IpContext)
    const [ input, setInput ] = useState<string>('')
        
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setInputValue(input)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)    

    return ( 
        <header>
            <h1 className="title">IP Address Tracker</h1>

            <div className="search-ip-bar">
                <input className="search-input" type="text" placeholder="Pesquise por um endereço de IP ou domínio" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                <button className="btn-find-address" type="button" onClick={() => setInputValue(input)}>
                    <img src={iconArrow} alt="Arrow" />
                </button>
            </div>
        </header>
    )
}