import { createContext, useState } from "react"

import { MapInfoTypes } from "../types/map-info";
import { ProviderProps } from "../types/provider-props";

type MapContextType = {
    mapInfo: MapInfoTypes | undefined;
    setMapInfo: (info: MapInfoTypes | undefined) => void;
}

export const MapContext = createContext<MapContextType>({
    mapInfo: {
        ip: 0,
        lat: 0,
        lng: 0,
        location: "",
        timezone: "",
        isp: ""
    },
    setMapInfo: () => { }
})

export const MapProvider: React.FC<ProviderProps> = ({ children }) => {
    const [mapInfo, setMapInfo] = useState<MapInfoTypes>()

    return (
        <MapContext.Provider value={{ mapInfo, setMapInfo }}>
            {children}
        </MapContext.Provider>
    )
}  