import 'babel-polyfill'
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, HashRouter} from 'react-router-dom'
import Routes from './routers/router'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './redux/reducer'
import {fetchSend} from './common/common'
import './styles/common'
if (module.hot) {
    module.hot.accept()
}
let store = createStore(reducers);
ReactDOM.render(<Provider store={store}>
  <HashRouter>
    {Routes}
  </HashRouter>
</Provider>, document.getElementById('root'));
