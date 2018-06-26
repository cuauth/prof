import { combineReducers } from 'redux'
import listaFechas from './listaFechas'
import listaAlumnos from './listaAlumnos'
export default combineReducers({
  listaFechas,
  listaAlumnos
})