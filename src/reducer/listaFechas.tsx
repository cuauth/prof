import { grupos } from '../actions'

const listaFechas = (state = {}, action) => {
  switch (action.type) {
    case grupos.AGREGAR_GRUPO:
    case grupos.AGREGAR_FECHA_INICIO:
      return action.payload.fechas;
    default:
      return state
  }
}
export default listaFechas