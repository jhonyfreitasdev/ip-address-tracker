import L from 'leaflet';
import { useEffect, useContext } from 'react';

import { getGeolocation } from '../../services/geolocation.api';
import { IpContext } from '../../context/ip-value-context';
import { MapContext } from '../../context/map-info-context';

import './index.sass'
import 'leaflet/dist/leaflet.css';

export const Map: React.FC = () => {
    const { mapInfo, setMapInfo } = useContext(MapContext)
    const { inputValue } = useContext(IpContext)

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation(inputValue)

            setMapInfo({
                code: geolocation.code,
                ip: geolocation.ip,
                lat: geolocation.location.lat,
                lng: geolocation.location.lng,
                location: `${geolocation.location.region}, ${geolocation.location.country} ${geolocation.location.city}`,
                timezone: geolocation.location.timezone
            })

        }

        fetchData()
    }, [inputValue, setMapInfo])

    useEffect(() => {
        let map = L.map('map').setView([-23.5475, -46.63611], 13);

        if (mapInfo !== undefined) {
            map = L.map('map').setView([mapInfo.lat, mapInfo.lng], 13);
        }

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);

        return () => {
            map.remove();
        };
    }, [])

    return (
        <section>
            {mapInfo?.code === undefined ?
                <>
                    <div id="map" style={{ width: '100%', height: '100%', position: 'relative', zIndex: '-1' }}></div>
                    <div className='not-found'>
                        <p> Endereço de Ip ou domínio não encontrado </p>
                    </div>
                </>

                : <div id="map" style={{ width: '100%', height: '100%', position: 'relative', zIndex: '-1' }}></div>
            }
        </section>
    )
}