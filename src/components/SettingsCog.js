import React from "react"
import { connect } from 'react-redux'
import style from './SettingsCog.css'

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'

class SettingsCog extends React.Component {
  constructor(props) {
    super(props)
    this.showSettings = this.showSettings.bind(this)
    this.renderSettingsList  = this.renderSettingsList.bind(this)
    this.state = {
      showList: false
    }
  }
  showSettings () {
    this.setState({
      showList: !this.state.showList
    })
  }
  renderSettingsList() {
    if(this.state.showList){
      return <div className={style.settingsList}>
          <ul>
            <li>Propiedad 1</li>
          </ul>
        </div>
    }
    return null
  }
  render() {
    const strIconClicked =  (this.state.showList) ? style.clicked : ''
    return <div className={style.SettingsCog}>
        <FaIcon onClick={this.showSettings} className={style.settingsIcon + ' ' +strIconClicked} icon="cog" />
        {this.renderSettingsList()}
      </div>
    
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
)(SettingsCog)