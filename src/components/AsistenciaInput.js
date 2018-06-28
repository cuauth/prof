import React from "react"
import { connect } from 'react-redux'
class AsistenciaInput extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange() {
    let newValue = (this.props.checked)? 0 : 1
    this.props.changeAsistencia(this.props.grupoId, this.props.indexAlumno, this.props.index, newValue)
  }
  render() {
    return <React.Fragment>
      <input type='checkbox' onChange={this.onChange} checked={this.props.checked == 1} tabIndex={this.props.tabIndex}/>
    </React.Fragment>
  }
  
}



const mapStateToProps = (state, props) => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeAsistencia: (grupoId, alumnoId, indiceDia, valor) =>{
      dispatch({
        type: 'CAMBIAR_ALUMNO_ASISTENCIA',
        payload: {
          grupoId: grupoId,
          alumnoId: alumnoId,
          indiceDia: indiceDia,
          nuevoValor: valor
        }
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsistenciaInput)