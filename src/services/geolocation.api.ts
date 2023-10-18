export const getGeolocation = async (inputValue: string) => {
    let url: string = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_6ZgyufseahUpicvWN9SDYCZUqK5th'

    function isIP(inputStr: string): boolean {
        const ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
        return ipPattern.test(inputStr);
    }

    if (inputValue !== null) {
        if (isIP(inputValue)) {
            url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_6ZgyufseahUpicvWN9SDYCZUqK5th&ipAddress=${inputValue}`
        } else {
            url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_6ZgyufseahUpicvWN9SDYCZUqK5th&domain=${inputValue}`
        }
    }
    const response = await fetch(url)

    return await response.json()
}