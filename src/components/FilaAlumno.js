import React from "react";
import AsistenciaInput from './AsistenciaInput'
import style from './FilaAlumno.css'
export default class FilaAlumno extends React.Component {
  constructor(props){
    super(props)
    this.renderDias = this.renderDias.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }
  handleCheckChange () {

  }
  renderDias () {
    let dias =[];
    let countAsistio = 0
    for(let i = 0; i<this.props.numeroDeDias ;i++){
      let asistio = false;
      
      if(this.props.alumno.asistencias[i]) {
        asistio = true;
        countAsistio++
      }
      dias.push(
        <td key={i} className={style.bodyDias}>
          <AsistenciaInput checked={asistio} indexAlumno={this.props.alumno.id} index={i} tabIndex={i * this.props.countPadding + this.props.index+1} />
        </td>)
    }
    dias.push(<td key={'final'}>
      {(countAsistio / this.props.numeroDeDias*100).toFixed(2)}%
    </td>)
    return dias
  }
  render() {
    
    return (
      <tr>
        <td className={style.bNombre}>{this.props.alumno.nombre}</td>
        {this.renderDias()}
      </tr>
      )
    }
}