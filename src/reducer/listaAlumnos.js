import { grupos } from '../actions'
const initialState = {
  byId: [],
  byHash: {}
}
const listaAlumnos = (state = initialState, action) => {
  switch (action.type) {
    case grupos.AGREGAR_ALUMNO:
      var newHash= Object.assign({}, state.byHash,{[action.id]: action.payload});
      return {
        byId: [ ...state.byId,action.id],
        byHash: newHash
      }
    case grupos.AGREGAR_ALUMNOS:
      let newArr = Object.assign({}, state);
      newArr.byId = newArr.byId.concat(action.alumnos.map( (item, index) => {
        newArr.byHash[item.id] = item
        return item.id
      }))
      return newArr
    case grupos.CAMBIAR_ALUMNO_ASISTENCIA: {
      let newArr = Object.assign({}, state);
      newArr.byHash[action.indexAlumno].asistencias[action.index] = action.newValue
      return newArr
    }
    default:
      return state
  }
}
export default listaAlumnos