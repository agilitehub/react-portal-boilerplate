import LeftMenu from '../custom/left-menu'
import RightMenu from '../custom/right-menu-1'
import RootContent from '../custom/root-content'

import AppConfig from './app-config.json'

const AgiliteReactConfig = {
  title: AppConfig.appName, // The main Title of your React Portal
  enableOnUnloadPrompt: false, // TODO: If true, prompts user when closing the browser window. NOTE: Works on modern browsers, but each browser treats functionality differently
  enableCustomIndex: false, // TODO: If true, an index.js is required in the 'src/custom' folder, allowing logic to be performed on startup of app
  theme: null, // Leave null for default Agilit-e Theme, provide required Object (e.g. require('../custom/resources/theme').default)
  rootContent: RootContent, // The Component to load when lauching app for the first time
  tabNavigation: {
    enabled: false, // If true, switching components is managed via Tabs, else the Root page is always loaded with the new Component
    rootTabTitle: 'Home'
  },
  agilite: {
    apiServerUrl: 'http://127.0.0.1:6010',
    apiKey: ''
  },
  toolbar: {
    enabled: true,
    defaultState: { // The default state of the Toolbar when loading app for the first time
      title: process.env.REACT_APP_NAME,
      leftMenu: {
        enabled: true,
        title: 'Portal Menu',
        content: LeftMenu
      },
      rightMenu: {
        enabled: false,
        title: 'Right Menu',
        content: RightMenu
      },
      customMenu1: null,
      customMenu2: null
    }
  }
}

export default AgiliteReactConfig
