import { grupos } from '../actions'
const initialState = {
  byId: [],
  byHash: {}
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
      newArr.asistencias[action.index] = action.newValue
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
    case grupos.AGREGAR_ALUMNOS:
      let newArr = Object.assign({}, state);
      newArr.byId = newArr.byId.concat(action.alumnos.map( (item, index) => {
        const nuevo_alumno = alumnos(item,action)
        newArr.byHash[nuevo_alumno.id] = nuevo_alumno
        return nuevo_alumno.id
      }))
      return newArr
    case grupos.CAMBIAR_ALUMNO_ASISTENCIA: {
      let newArr = Object.assign({}, state);
      newArr.byHash[action.indexAlumno] = alumnos(newArr.byHash[action.indexAlumno],action)
      return newArr
      
    }
    default:
      return state
  }
}
export default listaAlumnos