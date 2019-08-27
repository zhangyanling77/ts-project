import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Route,Link} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import history from './store/history';
import App from './containers/App';
ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
       </ConnectedRouter>
    </Provider>
    ,document.getElementById('root'));