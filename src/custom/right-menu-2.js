import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'

import RightMenu1 from './right-menu-1'
import CoreEnums from '../core/resources/enums'

export default function RightMenu (props) {
  const dispatch = useDispatch()
  const toolbar = useSelector(state => state.core.toolbar)

  return (
    <Menu
      style={{ width: 250 }}
      mode='inline'
      onClick={e => {
        toolbar.state.rightMenu.content = RightMenu1
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
        Right Menu 2 - Item 1
      </Menu.Item>
      <Menu.Item
        key='2'
      >
        Right Menu 2 - Item 2
      </Menu.Item>
    </Menu>
  )
}
