import { AppRoutes } from './routes/route';
import { IpProvider } from './context/ip-value-context';

import "./assets/styles/reset.sass"
import { MapProvider } from './context/map-info-context';

export const App: React.FC = () => {
	return (
		<IpProvider>
			<MapProvider>
				<AppRoutes />
			</MapProvider>
		</IpProvider>
	);
}