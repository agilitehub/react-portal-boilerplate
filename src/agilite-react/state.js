import { handleMenuItemClick, handleMenuAction, handleTabAction } from './controller'
import { initLeftMenuItems } from '../agilite-react-setup'
import Theme from './resources/theme'

// Components
import SignIn from '../examples/basic-sign-in-app/components/sign-in'

const state = {
  tabNavigation: {
    enabled: false,
    rootTabKey: 'home',
    rootTabTitle: 'Home',
    activeKey: 'home',
    tabs: [],
    animated: false,
    onTabChange: key => handleTabAction('change', key),
    onTabClose: key => handleTabAction('close', key)
  },
  leftMenu: {
    leftMenuEnabled: false,
    visible: false,
    leftMenuTitle: 'Apps',
    menuItems: initLeftMenuItems(),
    onLeftMenuItemClick: event => handleMenuItemClick(event),
    onLeftMenuOpen: () => handleMenuAction('open'),
    onLeftMenuClose: () => handleMenuAction('close')
  },
  theme: Theme,
  rootContent: SignIn
}

export default state
