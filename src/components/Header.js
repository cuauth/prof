import React from "react"
import { connect } from 'react-redux'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { mostrarGrupo } from '../actions'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.clickHomeHandler = this.clickHomeHandler.bind(this)
  }
  clickHomeHandler() {
    this.props.getHome()
  }
  render() {
    return <div>
        <FaIcon onClick={this.clickHomeHandler} icon="chevron-left" />
        <span>
          Ernesto Osuna Garzon
        </span>
      </div>
  }
}

const mapStateToProps = state => {
  return {
    settings: state.settings
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getHome: () => dispatch(mostrarGrupo(0))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)