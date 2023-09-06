import { createContext, useState } from "react"

type IpContextType = {
    ipAddress: string;
    setIpAddress: (ip: string) => void;
}
type IpProviderProps = {
    children: React.ReactNode;
}

export const IpContext = createContext<IpContextType>({
    ipAddress: '',
    setIpAddress: () => {}
})

export const IpProvider: React.FC<IpProviderProps> = ({ children }) => {
    const [ipAddress, setIpAddress] = useState<string>("")

    return (
        <IpContext.Provider value={{ ipAddress, setIpAddress }}>
           {children}
        </IpContext.Provider>
    )
}  