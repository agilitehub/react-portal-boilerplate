import Enums from './enums'
import Store from '../store'

// Components
import ListView from '../examples/basic-crud-app/components/list-view'

const state = {
  rootContent: ListView,
  tabNavigation: {
    enabled: true,
    rootTabKey: 'list_view',
    rootTabTitle: 'List View',
    activeKey: 'list_view',
    tabs: [],
    animated: false,
    onTabChange: key => { // TODO: These need to exist in the controller
      Store.dispatch({ type: Enums.reducers.CHANGE_TAB, key })
    },
    onTabClose: key => {
      Store.dispatch({ type: Enums.reducers.CLOSE_TAB, key })
    }
  }
}

export default state
