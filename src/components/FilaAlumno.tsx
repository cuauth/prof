import React from "react";

import style from './FilaAlumno.css'

export default class FilaAlumno extends React.Component<any> {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <tr>
        <td className={style.bNombre}>{this.props.alumno.nombre}</td>
        {this.props.showComponent}
      </tr>
      )
    }
}