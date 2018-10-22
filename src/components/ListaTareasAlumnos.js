import { connect } from 'react-redux'
import React from "react";
import FilaAlumno from './FilaAlumno'
import moment from 'moment';
import TareasRow from './TareasRow'
import 'moment/locale/es'
moment.locale('es')

class ListaTareaAlumnos extends React.Component {
  constructor(props){
    super(props)
    this.numeroDeDias = 0 ;
    this.renderHeader = this.renderHeader.bind(this)
  }

  renderHeader(){
    return (
      <thead>
        <tr  >
          <th >
              Nombre de alumno
          </th>
          <th>
            tarea1
          </th>
          <th>
            tarea2
          </th>
        </tr>
      </thead>
    )
  }

  render( ){
    const header = this.renderHeader(); // esta linea tiene que estar aqui, numero de dias 
    const paddingAlumnos = this.props.alumnos.length
    const filaAlumno = Object.keys(this.props.alumnos.data).map((key, index) => {
      const showComponent = <TareasRow listaTareas={this.props.listaTareas} grupoId={this.props.grupoId}  alumno={this.props.alumnos.data[key] } />
      return <FilaAlumno grupoId={this.props.grupoId} alumno={this.props.alumnos.data[key] } key={key} showComponent={showComponent}  />
    })
    return <table>
      {header}
      <tbody>{filaAlumno}</tbody>
      </table>
  }
}

const mapStateToProps = (state,props) => {
  console.log('undefined?',state.grupos[props.grupoId])
  return {
    listaTareas: state.grupos[props.grupoId].tareas,
    alumnos: {
      data: state.grupos[props.grupoId].alumnos,
      length: Object.keys(state.grupos[props.grupoId].alumnos).length
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaTareaAlumnos)