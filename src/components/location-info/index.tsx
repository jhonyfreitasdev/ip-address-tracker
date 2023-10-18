import { useContext } from 'react';

import { MapContext } from "../../context/map-info-context";

import './index.sass'

export const LocationInfo: React.FC = () => {
    const { mapInfo } = useContext(MapContext)
     
    return ( 
        <div className="container-location">
            <div className="div-info ip-address"> 
                <p className="description"> Endereço de IP </p>
                <p className="content"> {mapInfo?.ip} </p>
            </div>  

            <div className="div-info location"> 
                <p className="description"> Localização </p>
                <p className="content"> {mapInfo?.location} </p>
            </div>

            <div className="div-info time-zone"> 
                <p className="description"> Fuso horário </p>
                <p className="content"> {mapInfo?.timezone} </p>
            </div>

            <div className="div-info isp"> 
                <p className="description"> ISP </p>
                <p className="content"> {mapInfo?.isp} </p>
            </div>
        </div>
    )
}