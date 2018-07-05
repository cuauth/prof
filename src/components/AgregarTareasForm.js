import React from "react"
import { connect } from 'react-redux'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import style from './AgregarTareasForm.css'


class AgregarTareasForm extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.state= {
      titulo: '',
      descripcion: '',
      fechaDeEntrega: moment(),
      valor: 0
    }

  }
  onSubmit(event) {
    event.preventDefault();
    const form = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      fechaDeEntrega: this.state.fechaDeEntrega,
      valor: this.state.valor
    }
    this.props.onSubmit(form)
    
  }
  handleChange(event){
      this.setState({[event.target.name]: event.target.value});
  }
  handleDateChange(date){
    this.setState({ fechaDeEntrega: date});
  }
  render() {

    //this.props.agregarTarea(this.props.grupoId, { id:1, titulo: 'titulo', descripcion: 'descripcion de la tarea', fechaDeEntrega: moment().add('5','days'), valor: 100  }) 
    return <div className={style.TareasContainer}>
      <form  onSubmit={this.onSubmit}>
        <label>Titulo:
        <input type='text' name='titulo' value={this.state.titulo} onChange={this.handleChange} /></label>
        
        <label>Fecha de entrega:
        <DatePicker
          name='fechaDeEntrega'
          selected={this.state.fechaDeEntrega}
          onChange={this.handleDateChange}
        />
        </label>
        <label>Valor:
        <input type='text' name='valor' value={this.state.valor} onChange={this.handleChange} /></label>
        <label>Descripcion:
        <textarea name='descripcion' value={this.state.descripcion} onChange={this.handleChange} /></label>
        <button type="submit" value="Submit" >Agregar</button>
      </form>
      </div>
  }
}
const mapStateToProps = (state,props) => {
  
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgregarTareasForm)