import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
import AgregarAlumnoForm from './AgregarAlumnoForm'

import moment from 'moment'
class Grupo extends React.Component {
  constructor(props) {
    super(props)
    this.agregarAlumnoHandleClick = this.agregarAlumnoHandleClick.bind(this)
    this.hideForm = this.hideForm.bind(this)
    
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

  render() {
    const showForm = this.state.showForm
    return <React.Fragment>
      <button onClick={()=> {this.props.routeProp.history.push(`/grupo/${this.props.grupoId}/tareas`)}} >Ver tareas</button>
      <ListaAlumnos grupoId={this.props.grupoId} />
      <div>
        {(showForm)
          ? <AgregarAlumnoForm grupoId={this.props.grupoId} hideForm={this.hideForm} />
          : <button onClick={this.agregarAlumnoHandleClick}>Agregar Alumno</button>
        }
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