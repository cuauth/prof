import React from "react"
import { connect } from 'react-redux'
import moment from 'moment'
import UUID from 'uuid-js'
import AgregarTareasForm from './AgregarTareasForm'
import { agregarTarea} from './../actions'
class Tareas extends React.Component {
  constructor(props) {
    super(props)
    this.agregarTarea = this.agregarTarea.bind(this)
  }

  agregarTarea(form){
    const uid =  UUID.create(4).hex
    let newTarea = {
       id:uid ,...form 
    }
    this.props.agregarTarea(this.props.grupoId, newTarea ) 
  }
  render() {

    //
    return <React.Fragment>
      <AgregarTareasForm onSubmit={this.agregarTarea} />
      </React.Fragment>
  }
}
const mapStateToProps = (state,props) => {
  
  console.log(state.grupos[props.grupoId].tareas)
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
)(Tareas)