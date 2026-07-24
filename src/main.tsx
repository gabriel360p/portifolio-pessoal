import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'swiper/css'
import 'swiper/css/pagination'

import App from './containers/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
