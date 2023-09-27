import { createContext, useState } from "react"

import { ProviderProps } from "../types/provider-props"

type IpContextType = {
    ipAddress: string;
    setIpAddress: (ip: string) => void;
}

export const IpContext = createContext<IpContextType>({
    ipAddress: '',
    setIpAddress: () => {}
})

export const IpProvider: React.FC<ProviderProps> = ({ children }) => {
    const [ipAddress, setIpAddress] = useState<string>("")

    return (
        <IpContext.Provider value={{ ipAddress, setIpAddress }}>
           {children}
        </IpContext.Provider>
    )
}  