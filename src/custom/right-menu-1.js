import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'

import RightMenu2 from './right-menu-2'
import CoreEnums from '../core/resources/enums'

export default function RightMenu (props) {
  const dispatch = useDispatch()
  const coreState = useSelector(state => state.core)

  return (
    <Menu
      style={{ width: 250 }}
      mode='inline'
      onClick={e => {
        const toolbar = coreState.toolbar
        toolbar.state.rightMenu.content = RightMenu2

        props.handleCloseRightMenu()

        dispatch({
          type: CoreEnums.reducers.SET_TOOLBAR,
          payload: toolbar
        })
      }}
    >
      <Menu.Item
        key='1'
      >
        Right Menu 1 - Item 1
      </Menu.Item>
      <Menu.Item
        key='2'
      >
        Right Menu 1 - Item 2
      </Menu.Item>
    </Menu>
  )
}
