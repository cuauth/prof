import React from "react"
import { connect } from 'react-redux'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { mostrarGrupo } from '../actions'
import { Link } from 'react-router-dom'

import style from './Header.css'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.clickHomeHandler = this.clickHomeHandler.bind(this)
  }
  clickHomeHandler() {
    this.props.getHome()
  }
  render() {
    return <div className={style.headerContainer}>
        <Link to={'/'}>
          <FaIcon onClick={this.clickHomeHandler} icon="home" className={style.homeIcon} />
        </Link>
        <span  className={style.headerName}>
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