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
    leftMenuEnabled: true,
    visible: false,
    leftMenuTitle: 'Apps',
    menuItems: [Enums.menuItems.BASIC_CRUD_APP],
    handleLeftMenuItemClick: event => handleMenuItemClick(event),
    onOpenLeftMenu: () => handleMenuAction('open'),
    onCloseLeftMenu: () => handleMenuAction('close')
  },
  theme: Theme
}

export default state
