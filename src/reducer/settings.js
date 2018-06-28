import { combineReducers } from 'redux'

const settingsInitial = {
  mostrarGrupo: 0, //solo muestra el grupo en cuestion ( siempre y cuando no sea 0 )
  paseDeLista: false, // si mostrar grupo es diferente de  0 , y esto es true, solo se debe mostrar dia actual
}

const settingsReducer = (state = settingsInitial, action) => {
  switch (action.type) {
    case 'MOSTRAR_GRUPO': {
      return {
        ...state,
        mostrarGrupo : action.payload.grupoId
      } 
    }
    default:
    return state
  }
}
export default settingsReducer