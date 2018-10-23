import React from "react"
import { connect } from 'react-redux'
import ListaAsistenciaAlumnos from './ListaAsistenciaAlumnos'
import AgregarAlumnoForm from './AgregarAlumnoForm'

import moment from 'moment'
class Grupo extends React.Component {
  constructor(props) {
    super(props)
    this.agregarAlumnoHandleClick = this.agregarAlumnoHandleClick.bind(this)
    this.hideForm = this.hideForm.bind(this)
    this.goTareas = this.goTareas.bind(this)
    this.revisarTareas = this.revisarTareas.bind(this)
    this.state = {
      showForm: false
    } 
  }
  agregarAlumnoHandleClick() {
    this.setState({
      showForm: true
    })
  }
  hideForm(){
    this.setState({
      showForm: false
    })
  }

  goTareas(){
    this.props.routeProp.history.push(`/grupo/${this.props.grupoId}/tareas`)
  }

  revisarTareas(){
    this.props.routeProp.history.push(`/grupo/${this.props.grupoId}/revisarTareas`)
  }

  render() {
    const showForm = this.state.showForm
    return <React.Fragment>
      <button onClick={this.goTareas} >Ver tareas</button>
      <ListaAsistenciaAlumnos grupoId={this.props.grupoId} />
      <div>
        {(showForm)
          ? <AgregarAlumnoForm grupoId={this.props.grupoId} hideForm={this.hideForm} />
          : <button onClick={this.agregarAlumnoHandleClick}>Agregar Alumno</button>
        }
      </div>
      <div>
        <button onClick={this.revisarTareas}>Revisar Tareas</button>
      </div>
      </React.Fragment>
  }
}

const mapStateToProps = (state,props) => {
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grupo)