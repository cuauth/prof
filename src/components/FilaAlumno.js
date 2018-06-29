import React from "react";
import style from './FilaAlumno.css'
export default class FilaAlumno extends React.Component {
  constructor(props){
    super(props)
    this.renderDias = this.renderDias.bind(this)
    
  }
  renderDias (){
    console.log(this.props.numeroDeDias)
    let dias =[];
    for(let i = 0; i<this.props.numeroDeDias ;i++){
      dias.push(<td key={i} className={style.bodyDias}><input type='checkbox' tabIndex={i * this.props.countPadding + this.props.index}/></td>)
    }
    return dias
  }
  render() {
    
    return (
      <tr>
        <td className={style.bNombre}>{this.props.nombre}</td>
        {this.renderDias()}
      </tr>
      )
    }
}