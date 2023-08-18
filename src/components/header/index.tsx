import "./index.sass";
import iconArrow from "../../assets/images/icon-arrow.svg"

export const Header = () => {
    return ( 
        <header>
            <h1 className="title">IP Address Tracker</h1>

            <div className="search-ip-bar">
                <input className="search-input" type="text" placeholder="Search for any Ip address or domain" />
                <button className="btn-find-address" type="button">
                    <img src={iconArrow} alt="Arrow" />
                </button>
            </div>
        </header>
    )
}