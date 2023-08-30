import L from 'leaflet';
import { useState, useEffect } from 'react';

import { getGeolocation } from '../../services/geolocation.api';
import { MapTypes } from './types';

import './index.sass'
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const [mapInfo, setMapInfo] = useState<MapTypes>()

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation()

            setMapInfo({
                ip: geolocation.ip,
                lat: geolocation.location.lat,
                lng: geolocation.location.lng,
                location: `${geolocation.location.region}, ${geolocation.location.country} ${geolocation.location.city}`,
                timezone: geolocation.location.timezone
            })
        }

        fetchData()
    }, [])

    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

        return () => {
            map.remove();
        };
    }, [])

    return (
        <section>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>;
        </section>
    )
}