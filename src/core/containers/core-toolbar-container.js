import { connect } from 'react-redux'
import CoreToolbar from '../components/core-toolbar'

const mapStateToProps = state => {
  return {
    title: state.core.toolbar.state.title,
    leftMenu: state.core.toolbar.state.leftMenu,
    rightMenu: state.core.toolbar.state.rightMenu,
    customMenu1: state.core.toolbar.state.customMenu1,
    customMenu2: state.core.toolbar.state.customMenu2
  }
}

export default connect(
  mapStateToProps
)(CoreToolbar)
