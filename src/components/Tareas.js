import React from "react"
import { connect } from 'react-redux'
import moment from 'moment'
import UUID from 'uuid-js'
import AgregarTareasForm from './AgregarTareasForm'
import { agregarTarea} from './../actions'
import style from './Tareas.css'
class Tareas extends React.Component {
  constructor(props) {
    super(props)
    this.agregarTarea = this.agregarTarea.bind(this)
    this.renderTareas = this.renderTareas.bind(this)
  }

  agregarTarea(form){
    const uid =  UUID.create(4).hex
    let newTarea = {
       id:uid ,...form 
    }
    this.props.agregarTarea(this.props.grupoId, newTarea ) 
  }
  renderTareas() {
    const list = Object.keys(this.props.tareas).map((key,index) => {
      const currentTarea = this.props.tareas[key]
      return <div key={key} className={style.boxTarea}> 
      <div className={style.headerTarea}>
        <span className={style.titleTarea}>{currentTarea.titulo}</span> 
        <span className={style.fechaEntrega}>{moment(currentTarea.fechaDeEntrega).format('D [de] MMM [del] YY')}</span>
      </div>
      <div className={style.bodyTarea}>
        {currentTarea.descripcion}
      </div>
      <div className={style.footerTarea}>
        {currentTarea.valor}
      </div>
      </div>
    })
    return <div class={style.containerTarea}>{list}</div>
  }
  render() {

    //
    return <React.Fragment>
      {this.renderTareas()}
      <AgregarTareasForm onSubmit={this.agregarTarea} />
      
      </React.Fragment>
  }
}
const mapStateToProps = (state,props) => {
  
  
  return {
    settings: state.settings,
    tareas: state.grupos[props.grupoId].tareas || []
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