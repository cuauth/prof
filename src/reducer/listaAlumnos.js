import { grupos } from '../actions'
import tareas from './alumnos/tareas'
const initialState = {

}


const initialAlumno = {
  id: 0,
  nombre:'',
  asistencias: [],
  tareas: {}
  
}
const alumnos = (state= initialState, action) => {
  switch (action.type) {
    case grupos.GUARDAR_TAREA_ALUMNO: {
      console.log('old state', state)
      let newState = Object.assign({}, state);
      
      if(newState.tareas == undefined) newState.tareas = {}
      let newTarea = Object.assign({},newState.tareas[action.payload.tarea.id])
      console.log('newtarea ',newTarea)
      newState.tareas[action.payload.tarea.id] = tareas(newTarea, action)
      console.log('nuevoAlumno', newState)
      return newState
    }
    case grupos.AGREGAR_ALUMNO: {
      const newAlumno = {
        id: action.payload.alumno.id,
        nombre: action.payload.alumno.nombre,
        asistencias: [],
        tareas: {}
      }
      console.log('nuevo alumnos?')
      return newAlumno
    }
    case grupos.CAMBIAR_ALUMNO_ASISTENCIA: {

      let newArr = Object.assign({}, state);
      newArr.asistencias[action.payload.indiceDia] = action.payload.nuevoValor
      return newArr
    }
    default: 
    return state;
    
  }
}

const listaAlumnos = (state = initialState, action) => {
  
  switch (action.type) {
    case grupos.GUARDAR_TAREA_ALUMNO: {
      let newState = Object.assign({}, state);
      newState[action.payload.alumnoId] = alumnos(newState[action.payload.alumnoId],action)
      return newState
    }
    case grupos.AGREGAR_ALUMNO:
      const newState = {
        ...state,
        alumnos: {
          ...state.alumnos,
          [action.payload.alumno.id]: alumnos(undefined,action)
        }
      }
      return newState
    case grupos.AGREGAR_GRUPO:
    case grupos.AGREGAR_ALUMNOS:
      let newArr = Object.assign({}, state)
      action.payload.alumnos.map( function(item, index)  {
        const nuevoAlumno = alumnos(item,action)
        newArr[nuevoAlumno.id] = nuevoAlumno
      })
      return newArr
    case grupos.CAMBIAR_ALUMNO_ASISTENCIA: {
      let newArr = Object.assign({}, state);
      console.log(grupos.CAMBIAR_ALUMNO_ASISTENCIA, newArr,newArr[action.payload.alumnoId])
      newArr[action.payload.alumnoId] = alumnos(newArr[action.payload.alumnoId],action)
      return newArr
      
    }
    default:
      return state
  }
}
export default listaAlumnos