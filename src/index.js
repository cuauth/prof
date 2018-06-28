import React from "react"
import ReactDOM from "react-dom"
import ListaAumnos from './components/ListaAlumnos'
import moment from 'moment'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { agregarFechas , agregarAlumno, agregarAlumnos} from './actions/index'
import reducer from './reducer'
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

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
  type: 'AGREGAR_GRUPO',
  payload: {
    id: 1,
    alumnos: alumnos,
    fechas: {
      inicio: inicio,
      fin: moment(inicio).add(15, 'days')
    }
  }
})
const Index = () => {
  return <Provider store={store}>
      <ListaAumnos/>
    </Provider>
};

ReactDOM.render(<Index />, document.getElementById("index"));