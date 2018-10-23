import TareasInput from './TareasInput'
import React from "react";

class TareasRow extends React.Component<any> {
  constructor(props){
    super(props)
    this.renderTarea = this.renderTarea.bind(this)

  }

  renderTarea(keyTarea){
    const currentTarea =this.props.listaTareas[keyTarea]
    return <td key={currentTarea.titulo + '-' + this.props.alumno.id}>
    <TareasInput tarea={currentTarea} grupoId={this.props.grupoId} alumnoId={this.props.alumno.id} />
    </td>
  }
  render(){
    const tareas = Object.keys(this.props.listaTareas).map(this.renderTarea)
    return tareas
  }
}
export default TareasRow