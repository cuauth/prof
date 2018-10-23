import React from "react"
import { connect } from 'react-redux'
import { mostrarGrupo } from '../actions'
import { Link } from 'react-router-dom'
import style from './ListaGrupos.css'
class ListaGrupos extends React.Component {
  constructor(props) {
    super(props)
    this.renderGrupos = this.renderGrupos.bind(this)
  }

  renderGrupos () {
    console.log('renderGrupos')
    return Object.keys(this.props.grupos).map( (key, index) => {
      return <Link key={`/grupo/${key}`} to={`/grupo/${key}`}>Grupo {key}</Link>
    })
  }
  render() {
    return <div className={style.ListaGrupos}>
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