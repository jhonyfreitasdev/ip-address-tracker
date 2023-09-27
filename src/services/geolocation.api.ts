export const getGeolocation = async (ipValue?: string) => {
        
    const response= await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3wiTGmcvqMJDMnmtzcZhhWvXXAiIF&ipAddress=${ipValue}`)
    
    return await response.json()
}