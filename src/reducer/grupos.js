import listaFechas from './listaFechas'
import listaAlumnos from './listaAlumnos'
import {grupos} from '../actions/index'

/*
struct of grupos
  id: 0,
  alumnos: {},
  fechas: {} ,
  tareas: {}
*/
const gruposReducer = (state = {}, action) => {
  switch (action.type) {
    case grupos.GUARDAR_TAREA_ALUMNO: {
      let newState = Object.assign({}, state);
      newState[action.payload.grupoId].alumnos = listaAlumnos(newState[action.payload.grupoId].alumnos,action)
      return newState
    }
    case 'AGREGAR_ALUMNO': {
      return {
        ...state,
        [action.payload.grupoId]: listaAlumnos(state[action.payload.grupoId],action)
      }
    }
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
      newArr[action.payload.grupoId].alumnos = listaAlumnos(state[action.payload.grupoId].alumnos,action)

      return newArr
    }
    case 'AGREGAR_TAREA': {
      let newArr = Object.assign({}, state);
      newArr[action.payload.grupoId].tareas = {
        ...newArr[action.payload.grupoId].tareas, 
        [action.payload.tarea.id]: {
          id: action.payload.tarea.id,
          titulo: action.payload.tarea.titulo,
          descripcion: action.payload.tarea.descripcion,
          fechaDeEntrega: action.payload.tarea.fechaDeEntrega,
          valor: action.payload.tarea.valor
        }
      }
      return newArr
    }
    default:
    return state
  }
}
export default gruposReducer