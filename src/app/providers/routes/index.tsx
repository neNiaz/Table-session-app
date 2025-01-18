import { FC, ReactElement } from 'react';
import { App } from '../../App.tsx';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TrainingSessionTable } from '../../../pages/training-sessions';

export const AppRoutes: FC = (): ReactElement => {
  let routes;

  routes = userRoutes();

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

const userRoutes = () => [
  {
    path: '/',
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: '/',
        element: <TrainingSessionTable />,
      },
    ],
  },
];
