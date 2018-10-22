import React from "react"
import { connect } from 'react-redux'
import Grupo from './Grupo'
import Tareas from './Tareas'
import ListaGrupos from './ListaGrupos'
import RevisarTareas from './RevisarTareas'
import Header from  './Header'
import SettingsCog from './SettingsCog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog , faChevronLeft, faHome  } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route } from 'react-router'
import style from './App.css'
import { ConnectedRouter } from 'connected-react-router'
import 'react-datepicker/dist/react-datepicker.css?external'
library.add(faCog,faChevronLeft, faHome)

class App extends React.Component {
  constructor(props){
    super(props)
    this.routeToTareas = this.routeToTareas.bind(this)
    this.routeToRevisarTareas = this.routeToRevisarTareas.bind(this)
    this.routeToGrupo = this.routeToGrupo.bind(this)
  }
  routeToTareas(routeProps) {
    return <Tareas grupoId={routeProps.match.params.key} routeProp={routeProps} />
  }

  routeToRevisarTareas(routeProps) {
    return <RevisarTareas grupoId={routeProps.match.params.key} routeProp={routeProps} />
  }
  routeToGrupo(routeProps){
    return <Grupo grupoId={routeProps.match.params.key} routeProp={routeProps} />
  }

  render() {
    return <ConnectedRouter history={this.props.history}>
        <React.Fragment>
          <SettingsCog />
          <Header />
          <Switch>
          <Route path="/grupo/:key/tareas" render={this.routeToTareas}/>
          <Route path="/grupo/:key/revisarTareas" render={this.routeToRevisarTareas}/>
          <Route path="/grupo/:key" render={this.routeToGrupo }/>
          <Route exact path="/" component={ListaGrupos} />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
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