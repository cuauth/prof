import React from "react"
import ReactDOM from "react-dom"
import App from './components/App'
import moment from 'moment'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { agregarGrupo } from './actions/index'
import reducer from './reducer'

import { Router, Route } from 'react-router'
import createHistory from "history/createBrowserHistory"
import { connectRouter, routerMiddleware } from 'connected-react-router'
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')
const inicio = moment()
const alumnos = [
  {
    id: 1,
    nombre: 'alberto garcia orozco',
    asistencias: [ 1,1,1,1,1,0,0,1,1,1,0,1]
  },
  {
    id: 2,
    nombre: 'ernesto lizarraga osuna',
    asistencias: [ 1,1,1,1,1,1,1,1,1,1,0,1]
  },
  {
    id: 3,
    nombre: 'lucia mira lagos',
    asistencias: [ 1,1,1,1,1,1,1,1,1,1,1,1]
  }
]
const alumnos2 = [
  {
    id: 1,
    nombre: 'alberto garcia orozco',
    asistencias: [ 1,1,1,1,1,0,0,1,1,1,0,1]
  },
  {
    id: 2,
    nombre: 'ernesto lizarraga osuna',
    asistencias: [ 1,1,1,1,1,1,1,1,1,1,0,1]
  },
  {
    id: 3,
    nombre: 'lucia mira lagos',
    asistencias: [ 1,1,1,1,1,1,1,1,1,1,1,1]
  }
]
const history =createHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)
store.dispatch(agregarGrupo(1, alumnos, {inicio:  inicio,fin: moment(inicio).add(15, 'days') }))
store.dispatch(agregarGrupo(2, alumnos2, {inicio:  inicio,fin: moment(inicio).add(15, 'days') }))
const Index = () => {
  return <Provider store={store}>
        <App history={history} />
    </Provider>
};

ReactDOM.render(<Index />, document.getElementById("index"));