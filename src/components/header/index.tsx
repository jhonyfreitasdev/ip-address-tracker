import { useContext, useState } from "react";

import { IpContext } from "../../context/ip-value-context";
import iconArrow from "../../assets/images/icon-arrow.svg"

import "./index.sass";

export const Header: React.FC = () => {
    const { setIpAddress } = useContext(IpContext)
    const [ inputValue, setInputValue ] = useState<string>('')
        
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIpAddress(inputValue)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setInputValue(numericValue)
    }    

    return ( 
        <header>
            <h1 className="title">IP Address Tracker</h1>

            <div className="search-ip-bar">
                <input className="search-input" type="text" placeholder="Pesquise por um endereço de IP ou domínio" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                <button className="btn-find-address" type="button" onClick={() => setIpAddress(inputValue)}>
                    <img src={iconArrow} alt="Arrow" />
                </button>
            </div>
        </header>
    )
}