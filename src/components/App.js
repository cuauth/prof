import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
class App extends React.Component {

  render() {
    return <React.Fragment>
        <ListaAlumnos grupoId={1} />
        <ListaAlumnos grupoId={2} />
      </React.Fragment>
    
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)