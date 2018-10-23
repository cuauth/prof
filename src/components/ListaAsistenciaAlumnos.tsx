import { connect } from 'react-redux'
import React from "react";
import style from './ListaAlumnos.css'
import FilaAlumno from './FilaAlumno'
import AsistenciasRow from './AsistenciasRow'
import moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
moment.locale('es')

class ListaAsistenciaAlumnos extends React.Component<any> {
  numeroDeDias: number
  constructor(props){
    super(props)
    this.numeroDeDias = 0 ;
    this.renderHeader = this.renderHeader.bind(this)
  }

  renderHeader(){
    if(!this.props.listaFechas) return null;
    let diaEnUso =  moment(this.props.listaFechas.inicio)
    let nuevaSemana = true
    let semanas = Array<any>();
    let semanaCount = 0 
    let dias = Array<any>();
    let diaCount = 0
    this.numeroDeDias = 0
    
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
          <th rowSpan={2} className={style.headerNombreAlumno}>
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
    const filaAlumno = Object.keys(this.props.alumnos.data).map((key, index) => {
      const showComponent = <AsistenciasRow  numeroDeDias={this.numeroDeDias} alumno={this.props.alumnos.data[key]} grupoId={this.props.grupoId}
      countPadding={paddingAlumnos} index={index} />
      
      return <FilaAlumno grupoId={this.props.grupoId} alumno={this.props.alumnos.data[key] } key={key} showComponent={showComponent}  />
    })
    return <table className={style.listaAlumnosGrid}>
      {header}
      <tbody>{filaAlumno}</tbody>
      </table>
  }
}

const mapStateToProps = (state,props) => {
  return {
    listaFechas: state.grupos[props.grupoId].fechas,
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
)(ListaAsistenciaAlumnos)