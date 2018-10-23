import React from "react"
import { connect } from 'react-redux'
import { mostrarGrupo } from '../actions'
import ListaTareasAlumnos from './ListaTareasAlumnos'
class RevisarTareas extends React.Component<any> {
  constructor(props) {
    super(props)
  }
  render(){
    return <ListaTareasAlumnos grupoId={this.props.grupoId}/>
  }
}

 


const mapStateToProps = state => {
  return {
    grupos: state.grupos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    mostrarGrupo: (grupoId) => dispatch(mostrarGrupo(grupoId))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RevisarTareas)