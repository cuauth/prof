import { connect } from 'react-redux'
import {guardarTareaAlumno} from '../actions/index'
import React from "react";

class TareasInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this)
    this.state = {
      valorTarea: 0
    }
  }
  onChangeHandler(event) {
    this.setState({valorTarea: event.target.value});
  }
  onKeyPressHandler(event) {
    if (event.key === 'Enter') {
      const tareaAlumno = {
        id: this.props.tarea.id,
        valor: this.state.valorTarea,
        fechaEntregada: '',
        fechaUltimaActualizacion: ''
      }
      this.props.guardarTareaAlumno(this.props.grupoId, this.props.alumnoId, tareaAlumno)
    }
  }
  render(){
    return  <input value={this.state.valorTarea} onChange={this.onChangeHandler}
      onKeyPress={this.onKeyPressHandler} />
    }
}


//guardarTareaAlumno
const mapStateToProps = function(state,props) {
    return {
  
    }
  }
  const mapDispatchToProps = function(dispatch) {
    return {
      guardarTareaAlumno: function(grupoId, alumnoId,tarea){
        console.log("dispatching",alumnoId, tarea)
        dispatch(guardarTareaAlumno(grupoId, alumnoId, tarea))
      }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TareasInput)