import { useState, useEffect } from 'react';
import { getGeolocation } from '../../services/geolocation.api';

export const Map = () => {
    const [geolocation, setGeolocation] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation('BR')
            setGeolocation(geolocation)
        }

        fetchData()
    },[])

    console.log(geolocation);

    return (
        <>

        </>
    )
}