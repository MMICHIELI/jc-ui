import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './app/app-redux/store';

// Root Component
import App from './app/App';

/**
 * Entry Point index.tsx
 * @param Component 
 */
const render = (Component: React.ComponentClass) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer >,
        document.getElementById('root')
    );
};

render(App);

// tslint:disable no-any
declare let module: { hot: any };
// tslint:enable no-any
if (module.hot) {
    module.hot.accept('./app/App', () => {
        render(App);
    });
}
