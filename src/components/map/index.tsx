import L from 'leaflet';
import { useEffect, useContext } from 'react';

import { getGeolocation } from '../../services/geolocation.api';
import { IpContext } from '../../context/ip-value-context';
import { MapContext } from '../../context/map-info-context';

import './index.sass'
import 'leaflet/dist/leaflet.css';

export const Map: React.FC = () => {
    const { mapInfo, setMapInfo } = useContext(MapContext)
    const { ipAddress } = useContext(IpContext)

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation(ipAddress)
            
            if (geolocation.code === 403) {
                console.log(geolocation.messages);
            } else {
                setMapInfo({
                    ip: geolocation.ip,
                    lat: geolocation.location.lat,
                    lng: geolocation.location.lng,
                    location: `${geolocation.location.region}, ${geolocation.location.country} ${geolocation.location.city}`,
                    timezone: geolocation.location.timezone
                })
            }
        }

        fetchData()
    }, [ipAddress, setMapInfo])
    
    useEffect(() => {
        let map = L.map('map').setView([-23.5475, -46.63611], 13);

        if (mapInfo !== undefined) {
            map = L.map('map').setView([mapInfo.lat, mapInfo.lng], 13);
        } 
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

        return () => {
            map.remove();
        };
    }, [mapInfo])
    
    return (
        <section>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>;
        </section>
    )
}