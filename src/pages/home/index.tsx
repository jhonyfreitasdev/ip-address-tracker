import { Header } from "../../components/header"
import { LocationInfo } from "../../components/location-info"
import { Map } from "../../components/map"

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <LocationInfo/>
            <Map />
        </>
    )
}