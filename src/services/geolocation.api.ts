export const getGeolocation = async () => {
        
    const response= await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3wiTGmcvqMJDMnmtzcZhhWvXXAiIF&ipAddress=179.250.148.78`)
    
    return await response.json()
}