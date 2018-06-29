import React from "react"
import { connect } from 'react-redux'
import ListaAlumnos from './ListaAlumnos'
import ListaGrupos from './ListaGrupos'
import Header from  './Header'
import SettingsCog from './SettingsCog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog , faChevronLeft  } from '@fortawesome/free-solid-svg-icons'

library.add(faCog,faChevronLeft)

class App extends React.Component {

  render() {
    let body = null
    if ( this.props.settings.mostrarGrupo !== 0 ){
      body = <ListaAlumnos grupoId={this.props.settings.mostrarGrupo} />
    }else { 
      body = <ListaGrupos />
    }
    return <React.Fragment>
      <SettingsCog />
      <Header />
      {body}
      
      </React.Fragment>
    
  }
}

const mapStateToProps = state => {
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
)(App)