import L from 'leaflet';
import { useEffect, useContext, useState } from 'react';

import { getGeolocation } from '../../services/geolocation.api';
import { IpContext } from '../../context/ip-value-context';
import { MapContext } from '../../context/map-info-context';

import './index.sass'
import 'leaflet/dist/leaflet.css';

let map: L.Map | null = null;

export const Map: React.FC = () => {
    const { mapInfo, setMapInfo } = useContext(MapContext)
    const { inputValue } = useContext(IpContext)
    const [foundAddress, setFoundAddress] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            const geolocation = await getGeolocation(inputValue)

            if (geolocation['code'] === 422) {
                setFoundAddress(false)
            } else {
                setFoundAddress(true)

                setMapInfo({
                    ip: geolocation.ip,
                    lat: geolocation.location.lat,
                    lng: geolocation.location.lng,
                    location: `${geolocation.location.region}, ${geolocation.location.country} ${geolocation.location.city}`,
                    timezone: geolocation.location.timezone,
                    isp: geolocation.isp
                })
            }
        }

        fetchData()
    }, [inputValue, setMapInfo])

    useEffect(() => {
        if (!map) {
            map = L.map('map').setView([-23.49185, -46.84877], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);
        }

        if (mapInfo !== undefined) {

            map.setView([mapInfo.lat, mapInfo.lng], 13);
        }

        return () => {  //Essa função é executada quando o componente é desmontado ou quando alguma das dependências do useEffect muda
            if (map) {
                map.remove();
                map = null;
            }
        };
    }, [mapInfo]);

    return (
        <section>
            {   foundAddress === false ?
                <>
                    <div id="map" style={{ width: '100%', height: '100%', position: 'relative', zIndex: '-1' }}></div>

                    <div className='not-found'>
                        <p> Endereço de Ip ou domínio não encontrado </p>
                    </div>
                </>

                : <div id="map" style={{ width: '100%', height: '100%', position: 'relative', zIndex: '0' }}></div>
            }
        </section>
    )
}

