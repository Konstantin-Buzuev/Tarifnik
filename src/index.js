import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import initStore, { history } from './redux/store.js'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/es/integration/react'

import MainRouter from './router/MainRouter'
import { Route } from 'react-router-dom'

const { store, persistor } = initStore()

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ConnectedRouter history={history}>
				<Route component={MainRouter} />
			</ConnectedRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
