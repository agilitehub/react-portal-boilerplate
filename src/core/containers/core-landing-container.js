import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { addTab, changeTab, closeTab } from '../core-actions'

import CoreLanding from '../components/core-landing'

const mapStateToProps = state => {
  return {
    tabs: state.core.tabObject.tabs,
    activeKey: state.core.tabObject.activeKey
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ addTab, changeTab, closeTab }, dispatch)
// }

export default connect(
  mapStateToProps,
  null
)(CoreLanding)
