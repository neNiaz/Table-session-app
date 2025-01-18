import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { AppRoutes } from './app/providers/routes';

createRoot(document.getElementById('root')!).render(<AppRoutes />);
