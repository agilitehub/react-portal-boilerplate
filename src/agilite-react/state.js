import { handleMenuItemClick, handleMenuAction, handleTabAction } from './controller'
import Theme from './resources/theme'
import Enums from './resources/enums'

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
    onLeftMenuItemClick: event => handleMenuItemClick(event),
    onLeftMenuOpen: () => handleMenuAction('open'),
    onLeftMenuClose: () => handleMenuAction('close')
  },
  theme: Theme
}

export default state
