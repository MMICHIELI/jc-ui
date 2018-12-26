import { RouteComponentProps } from 'react-router';

import Home from '../home/Home';

interface Routes {
  path: string;
  component: React.SFC<RouteComponentProps | void> | React.ComponentClass<RouteComponentProps | void>;
}

const routes: Array<Routes> = [
  {
    path: '/',
    component: Home
  }
];

export default routes;