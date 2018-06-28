import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
import SettingsCog from './SettingsCog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faCog)

class App extends React.Component {

  render() {
    return <React.Fragment>
      <SettingsCog />
      <ListaAlumnos grupoId={1} />
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