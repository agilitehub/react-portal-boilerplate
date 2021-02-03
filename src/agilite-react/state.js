import { handleMenuItemClick, handleMenuAction, handleTabAction } from './controller'
import Enums from './enums'
import Theme from './theme'

const state = {
  tabNavigation: {
    enabled: true,
    rootTabKey: 'home',
    rootTabTitle: 'Home',
    activeKey: 'home',
    tabs: [],
    animated: false,
    onTabChange: key => handleTabAction('change', key),
    onTabClose: key => handleTabAction('close', key)
  },
  leftMenu: {
    enabled: true,
    visible: false,
    title: 'Apps',
    menuItems: [Enums.menuItems.BASIC_CRUD_APP],
    handleMenuItemClick: event => handleMenuItemClick(event),
    onOpen: () => handleMenuAction('open'),
    onClose: () => handleMenuAction('close')
  },
  theme: Theme
}

export default state
