import React from "react";
import style from './FilaAlumno.css'
import AsistenciaInput from './AsistenciaInput'

export default class AsistenciasRow extends React.Component<any> {
  constructor(props){
    super(props)
  }
  render(){
    let dias =Array<any>();
    let countAsistio = 0
    for(let i = 0; i<this.props.numeroDeDias ;i++){
      let asistio = false;
      
      if(this.props.alumno.asistencias[i]) {
        asistio = true;
        countAsistio++
      }
      dias.push(
        <td key={i} className={style.bodyDias}>
          <AsistenciaInput  grupoId={this.props.grupoId} checked={asistio} indexAlumno={this.props.alumno.id} index={i} tabIndex={i * this.props.countPadding + this.props.index+1} />
        </td>)
    }
    dias.push(<td key={'final'}>
      {(countAsistio / this.props.numeroDeDias*100).toFixed(2)}%
    </td>)
    return dias
  }
}