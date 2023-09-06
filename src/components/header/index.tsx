import { useContext } from "react";

import { IpContext } from "../../context/ip-value-context";
import iconArrow from "../../assets/images/icon-arrow.svg"

import "./index.sass";

export const Header: React.FC = () => {
    const { setIpAddress } = useContext(IpContext)
    
    return ( 
        <header>
            <h1 className="title">IP Address Tracker</h1>

            <div className="search-ip-bar">
                <input className="search-input" type="text" placeholder="Search for any Ip address or domain" onChange={(e) => setIpAddress(e.target.value)} />
                <button className="btn-find-address" type="button">
                    <img src={iconArrow} alt="Arrow" />
                </button>
            </div>
        </header>
    )
}