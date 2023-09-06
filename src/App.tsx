import { AppRoutes } from './routes/route';
import { IpProvider } from './context/ip-value-context';

import "./assets/styles/reset.sass"

export const App: React.FC = () => {
	return (
		<IpProvider>
			<AppRoutes /> 
		</IpProvider>
	);
}