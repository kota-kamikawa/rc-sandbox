// import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { AuthState } from '../store/auth';

type RouterContext = {
  auth: AuthState;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
});
