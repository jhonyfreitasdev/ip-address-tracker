import L from 'leaflet';
import { useState, useEffect, useContext } from 'react';

import { getGeolocation } from '../../services/geolocation.api';
import { MapInfoTypes } from './map-info';

import './index.sass'
import 'leaflet/dist/leaflet.css';
import { IpContext } from '../../context/ip-value-context';

export const Map = () => {
    const [mapInfo, setMapInfo] = useState<MapInfoTypes>()
    const { ipAddress } = useContext(IpContext)

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation(ipAddress)

            setMapInfo({
                ip: geolocation.ip,
                lat: geolocation.location.lat,
                lng: geolocation.location.lng,
                location: `${geolocation.location.region}, ${geolocation.location.country} ${geolocation.location.city}`,
                timezone: geolocation.location.timezone
            })
        }

        fetchData()
    }, [ipAddress])

    useEffect(() => {
        if (mapInfo?.lat === undefined) {
            const map = L.map('map').setView([-23.5475, -46.63611], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

            return () => {
                map.remove();
            };
        } else {
            const map = L.map('map').setView([mapInfo.lat, mapInfo.lng], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

            return () => {
                map.remove();
            };
        }
    }, [mapInfo])
    
    return (
        <section>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>;
        </section>
    )
}