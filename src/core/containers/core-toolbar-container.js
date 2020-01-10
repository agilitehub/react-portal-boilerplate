import { connect } from 'react-redux'
import CoreToolbar from '../components/core-toolbar'

const mapStateToProps = state => {
  return {
    title: state.core.toolbar.state.title,
    leftMenuEnabled: state.core.toolbar.state.leftMenu.enabled,
    leftMenuTitle: state.core.toolbar.state.leftMenu.title,
    leftMenuContent: state.core.toolbar.state.leftMenu.content,
    rightMenuEnabled: state.core.toolbar.state.rightMenu.enabled,
    rightMenuTitle: state.core.toolbar.state.rightMenu.title,
    rightMenuContent: state.core.toolbar.state.rightMenu.content,
    customMenu1: state.core.toolbar.state.customMenu1,
    customMenu2: state.core.toolbar.state.customMenu2
  }
}

export default connect(
  mapStateToProps
)(CoreToolbar)
