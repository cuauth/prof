import React from "react";
import style from './ListaAlumnos.css'
import FilaAlumno from './FilaAlumno'
import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

export default class ListaAlumnos extends React.Component {
  constructor(props){
    super(props)
    this.numeroDeDias = 0 ;
    this.renderHeader = this.renderHeader.bind(this)
  }

  renderHeader(){
    let diaEnUso =  moment(this.props.listaFechas.inicio)
    let nuevaSemana = true;
    let semanas = [];
    let semanaCount = 0 ;
    let dias = [];
    let diaCount = 0
    
    
    while(moment(diaEnUso).isSameOrBefore(this.props.listaFechas.fin, 'day') ){
      let weekday = moment(diaEnUso).weekday()
      if(weekday == 0 ) nuevaSemana=true
      if(weekday <= 4){  
        if(nuevaSemana){
          semanas.push(<th colSpan={5 - weekday} key={diaCount}  className={style.headerNombreSemana}>
              Semana {++semanaCount}
            </th>)
        nuevaSemana = false
        }
        dias.push(
          <th key={diaCount++} className={style.headerDias}>{moment(diaEnUso).format('dd')}</th>
        )
        this.numeroDeDias++
      }
      
      diaEnUso.add('1','day');
    }
    return (
      <thead>
        <tr  >
          <th rowSpan='2' className={style.headerNombreAlumno}>
              Nombre de alumno
          </th>
          {semanas}
        </tr>
        <tr>
          {dias}
        </tr>
      </thead>
    )
  }

  render( ){
    const header = this.renderHeader(); // esta linea tiene que estar aqui, numero de dias 
    const paddingAlumnos = this.props.alumnos.length
    const _numeroDeDias = this.numeroDeDias
    let filaAlumno = this.props.alumnos.map(function(item, index){
      item.countPadding = paddingAlumnos
      item.index = index+1
      item.numeroDeDias = _numeroDeDias
      return <FilaAlumno { ...item } key={index}  />
    })
    return <table className={style.listaAlumnosGrid}>
      {header}
      <tbody>{filaAlumno}</tbody>
      </table>
  }
}