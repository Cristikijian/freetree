import { createBrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const HomePage = () => (
  <div style={{ padding: '20px' }}>
    <h1>🎉 FreeTree запущен!</h1>
    <p>Добро пожаловать на платформу</p>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);