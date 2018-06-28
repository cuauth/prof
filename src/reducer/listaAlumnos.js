import { grupos } from '../actions'
const initialState = {

}


const initialAlumno = {
  id: 0,
  nombre:'',
  asistencias: []
  
}
const alumnos = (state= initialState, action) => {
  switch (action.type) {
    case grupos.AGREGAR_ALUMNOS: {
      return state
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
    case grupos.AGREGAR_ALUMNO:
      return state
    case grupos.AGREGAR_GRUPO:
    case grupos.AGREGAR_ALUMNOS:
      let newArr = Object.assign({}, state)
      action.payload.alumnos.map( (item, index) => {
        const nuevoAlumno = alumnos(item,action)
        newArr[nuevoAlumno.id] = nuevoAlumno
      })
      return newArr
    case grupos.CAMBIAR_ALUMNO_ASISTENCIA: {
      let newArr = Object.assign({}, state);

      newArr[action.payload.alumnoId] = alumnos(newArr[action.payload.alumnoId],action)
      return newArr
      
    }
    default:
      return state
  }
}
export default listaAlumnos