import { useContext } from 'react';

import { MapContext } from "../../context/map-info-context";

export const LocationInfo: React.FC = () => {
    const { mapInfo } = useContext(MapContext)
 
    return ( 
        <div className="container-location">
            <div className="div-info ip-address"> 
                <p className="description"> IP Address </p>
                <p className="content"> {mapInfo?.ip} </p>
            </div>  

            <div className="div-info location"> 
                <p className="description"> Location </p>
                <p className="content"> {mapInfo?.location} </p>
            </div>

            <div className="div-info time-zone"> 
                <p className="description"> Time zone </p>
                <p className="content"> {mapInfo?.timezone} </p>
            </div>

            <div className="div-info isp"> 
                <p className="description"> ISP </p>
                <p className="content"> {} </p>
            </div>
        </div>
    )
}