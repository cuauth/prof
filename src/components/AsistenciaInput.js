import React from "react"
import { connect } from 'react-redux'
class AsistenciaInput extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange() {
    let newValue = (this.props.checked)? 0 : 1
    this.props.changeAsistencia(this.props.indexAlumno, this.props.index, newValue)
  }
  render() {
    return <React.Fragment>
      <input type='checkbox' onChange={this.onChange} checked={this.props.checked == 1} tabIndex={this.props.tabIndex}/>
    </React.Fragment>
  }
  
}



const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeAsistencia: (indexAlumno, index, newValue) =>{
      dispatch({
        type: 'CAMBIAR_ALUMNO_ASISTENCIA',
        indexAlumno: indexAlumno,
        index: index,
        newValue: newValue
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsistenciaInput)