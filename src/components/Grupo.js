import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
import AgregarAlumnoForm from './AgregarAlumnoForm'
import { agregarTarea} from './../actions'
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
      <button onClick={()=>{ this.props.agregarTarea(this.props.grupoId, { id:1, titulo: 'titulo', descripcion: 'descripcion de la tarea', fechaDeEntrega: moment().add('5','days'), valor: 100  }) }} >Ver tareas</button>
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
    agregarTarea: (grupoId, tarea) =>{dispatch(agregarTarea(grupoId, tarea))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grupo)