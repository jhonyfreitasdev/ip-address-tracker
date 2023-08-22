export const getGeolocation = async (country: string) => {
    const urlCountry = `country?${country}`
    const response = await fetch(`https://geo.ipify.org/api/v2/${urlCountry}&apiKey=at_7aAE9kny0QpfuZPgLXcInG7n009GV`)
    return await response.json()
}