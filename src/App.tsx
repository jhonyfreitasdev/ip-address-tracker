import { AppRoutes } from './routes/route';
import { IpProvider } from './context/ip-value-context';
import { MapProvider } from './context/map-info-context';

import "./assets/styles/reset.sass"

export const App: React.FC = () => {
	return (
		<IpProvider>
			<MapProvider>
				<AppRoutes />
			</MapProvider>
		</IpProvider>
	);
}