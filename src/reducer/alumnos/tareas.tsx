import {grupos} from '../../actions'
const defaultState: TareaAlumno = {
    id: '0',
    valor: 0,
    fechaEntregada: undefined,
    fechaUltimaActualizacion: undefined
}

//tareas en alumno
const tareas = function(state:TareaAlumno = defaultState, action){
  switch (action.type) {
    case grupos.GUARDAR_TAREA_ALUMNO:
      return Object.assign({},state,action.payload.tarea)
    default:
      return state
    }
}
export default tareas