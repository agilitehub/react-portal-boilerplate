import React, { lazy, Suspense } from 'react'
import State from './state'
import Enums from './enums'
import { closeTab, addTab } from './controller'
import { Spin } from 'antd'

const AppWrapper = lazy(() => import('../examples/basic-crud-app/components/app-wrapper'))

const reducer = (state = State, action) => {
  let tmpObj = null

  switch (action.type) {
    case Enums.reducers.ADD_TAB:
      return addTab(action.tab.key, action.tab, state)
    case Enums.reducers.CHANGE_TAB:
      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          activeKey: action.key
        }
      }
    case Enums.reducers.CLOSE_TAB:
      tmpObj = closeTab(state.tabNavigation.tabs, action.key)

      return {
        ...state,
        tabNavigation: {
          ...state.tabNavigation,
          ...tmpObj
        }
      }
    case Enums.reducers.LEFT_MENU_OPEN:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          visible: true
        }
      }
    case Enums.reducers.LEFT_MENU_CLOSE:
      return {
        ...state,
        leftMenu: {
          ...state.leftMenu,
          visible: false
        }
      }
    case Enums.reducers.MENU_ITEM_CLICK:
      switch (action.key) {
        case Enums.menuItems.BASIC_CRUD_APP.key:
          tmpObj = {
            key: action.key,
            closeable: true,
            title: 'List View',
            content: (
              <Suspense fallback={<Spin>Loading...</Spin>}>
                <AppWrapper />
              </Suspense>
            )
          }
          break
        default:
          break
      }

      return addTab(action.key, tmpObj, state)
    default:
      return state
  }
}

export default reducer
