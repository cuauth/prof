import { combineReducers } from 'redux'
import listaFechas from './listaFechas'
import listaAlumnos from './listaAlumnos'


/*
struct of grupos
  id: 0,
  alumnos: [],
  fechas: {} 
*/
const gruposReducer = (state = {}, action) => {
  switch (action.type) {
    case 'AGREGAR_GRUPO': {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          alumnos: listaAlumnos(undefined, {type: action.type, payload: { alumnos: action.payload.alumnos }}),
          fechas: listaFechas(undefined, {type: action.type, payload: {fechas: action.payload.fechas}})
        }
        
      }
    }
    case 'CAMBIAR_ALUMNO_ASISTENCIA': {
      let newArr = Object.assign({}, state);
      newArr[1].alumnos = listaAlumnos(state[action.payload.grupoId].alumnos,action)

      return newArr
    }
    default:
    return state
  }
}


export default combineReducers({
  //listaFechas,
  //listaAlumnos,
  grupos: gruposReducer
})