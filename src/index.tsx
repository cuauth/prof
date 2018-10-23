import React from "react"
import ReactDOM from "react-dom"
import App from './components/App'
import moment from 'moment'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { agregarGrupo, agregarTarea } from './actions/index'
import reducer from './reducer'
import createHistory from "history/createBrowserHistory"
import { connectRouter, routerMiddleware } from 'connected-react-router'
import './types/grupos'
import 'moment/locale/es'  // without this line it didn't work
let alumnoTarea  : TareaAlumno = {
  id: "someId",
  valor: 20,
  fechaEntregada: new Date()
}
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
const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancer = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

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
store.dispatch(agregarTarea(1, { id:1, titulo: 'titulo', descripcion: 'descripcion de la tarea', fechaDeEntrega: moment().add('5','days'), valor: 100  }))
store.dispatch(agregarTarea(1, { id:2, titulo: 'titulo2', descripcion: 'descripcion de la tarea2', fechaDeEntrega: moment().add('1','days'), valor: 100  }))
const Index = () => {
  return <Provider store={store}>
        <App history={history} />
    </Provider>
};

ReactDOM.render(<Index />, document.getElementById("index")); 