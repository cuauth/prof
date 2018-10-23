import {grupos} from '../../actions'
const defaultState = {
    id: 0,
    valor: 0,
    fechaEntregada: null,
    fechaUltimaActualizacion: null
}
//tareas en alumno
const tareas = function(state = defaultState, action){
  switch (action.type) {
    case grupos.GUARDAR_TAREA_ALUMNO:
      return Object.assign({},state,action.payload.tarea)
    default:
      return state
    }
}
export default tareas