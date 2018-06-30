import React from "react"
import { connect } from 'react-redux'
import UUID from 'uuid-js'
import {agregarAlumno} from './../actions'
class AgregarAlumnoForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      nombre: ''
    }
  }
  handleSubmit (event) {
    this.props.agregarAlumno(this.props.grupoId, {
      id: UUID.create(4).hex,
      nombre: this.state.nombre
    })
    this.props.hideForm()
    event.preventDefault();
  }
  handleChange(event) {
    this.setState({nombre: event.target.value});
  }
  render() {
    console.log()
    return <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.nombre} onChange={this.handleChange} />
        <button type="submit" value="Submit" >Agregar</button>
      </form>
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
    agregarAlumno: (grupoId,alumno)=> dispatch(agregarAlumno(grupoId,alumno))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgregarAlumnoForm)