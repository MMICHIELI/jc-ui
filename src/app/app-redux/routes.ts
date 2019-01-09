import { RouteComponentProps } from 'react-router';

import { PATHS } from './constants';
import Dashboard from '../dashboard/Dashboard';

interface Routes {
  path: string;
  component: React.SFC<RouteComponentProps | void> | React.ComponentClass<RouteComponentProps | void>;
}

const routes: Array<Routes> = [
  {
    path: PATHS.dashboard,
    component: Dashboard
  }
];

export default routes;