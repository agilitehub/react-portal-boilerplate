import CoreEnums from './resources/enums'
import theme from './resources/theme'

export default {
  facet: CoreEnums.facets.LOADING,
  title: process.env.APP_NAME,
  theme,
  user: null,
  tabObject: {
    tabs: [],
    activeKey: CoreEnums.facets.HOME,
    activeApp: '',
    tabType: ''
  }
}
