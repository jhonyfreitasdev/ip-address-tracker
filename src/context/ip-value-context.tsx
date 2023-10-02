import { createContext, useState } from "react"

import { ProviderProps } from "../types/provider-props"

type IpContextType = {
    inputValue: string;
    setInputValue: (ip: string) => void;
}

export const IpContext = createContext<IpContextType>({
    inputValue: '',
    setInputValue: () => {}
})

export const IpProvider: React.FC<ProviderProps> = ({ children }) => {
    const [inputValue, setInputValue] = useState<string>("")

    return (
        <IpContext.Provider value={{ inputValue, setInputValue }}>
           {children}
        </IpContext.Provider>
    )
}  