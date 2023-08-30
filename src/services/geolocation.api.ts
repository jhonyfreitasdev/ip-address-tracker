export const getGeolocation = async (/*country: string*/) => {
    // const urlCountry = `country?${country}`
    const response= await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_7aAE9kny0QpfuZPgLXcInG7n009GV&ipAddress=177.152.137.6`)
    
    return await response.json()
}