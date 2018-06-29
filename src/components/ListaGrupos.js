import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
import { mostrarGrupo } from '../actions'
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
class ListaGrupos extends React.Component {
  constructor(props) {
    super(props)
    this.renderGrupos = this.renderGrupos.bind(this)
    this.handleClickGrupo = this.handleClickGrupo.bind(this)
  }

  handleClickGrupo (grupoId) {
    console.log('handling')
    this.props.mostrarGrupo(grupoId)
  }
  renderGrupos () {
    return Object.keys(this.props.grupos).map( (key, index) => {
      return <div onClick={()=>{this.handleClickGrupo(key)}}  key={key}>Grupo {key}</div>
    })
  }
  render() {
    
    return <div >
        Lista de Grupos
        {this.renderGrupos()}
      </div>
    
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
)(ListaGrupos)