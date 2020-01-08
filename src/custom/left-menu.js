import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAlignJustify, faArrowRight, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons'

import CoreEnums from '../core/resources/enums'

const SubMenu = Menu.SubMenu

export default function LeftMenu (props) {
  const dispatch = useDispatch()
  const rootTabTitle = useSelector(state => state.core.tabNavigation.rootTabTitle)
  const rootContent = useSelector(state => state.core.rootContent)

  function handleLeftMenu (e) {
    const key = e.key
    let Content = null

    // MODULECONDITION
    switch (key) {
      case CoreEnums.values.CORE_ROOT:
        Content = rootContent

        dispatch({
          type: CoreEnums.reducers.LOAD_CONTENT,
          payload: {
            content: <Content />,
            title: rootTabTitle,
            key,
            app: key,
            closable: false,
            custom: {}
          }
        })

        break
      case 'module1':
        Content = require('./module1-content').default

        dispatch({
          type: CoreEnums.reducers.LOAD_CONTENT,
          payload: {
            content: <Content />,
            title: 'Module 1',
            key,
            app: key,
            closable: true,
            custom: {}
          }
        })

        break
      case 'reset':
        dispatch({
          type: CoreEnums.reducers.RESET
        })

        break
      default:
        // Do Nothing
        return null
    }

    props.handleCloseLeftMenu()
  }

  return (
    <Menu
      onClick={handleLeftMenu}
      style={{ width: 250 }}
      defaultOpenKeys={['subMenu1']}
      mode='inline'
    >
      <Menu.Item
        key={CoreEnums.values.CORE_ROOT}
      >
        <FontAwesomeIcon icon={faHome} /> {rootTabTitle}
      </Menu.Item>
      <SubMenu
        key='subMenu1'
        title={
          <span>
            <FontAwesomeIcon icon={faAlignJustify} />{' '}
            <span>Modules</span>
          </span>
        }
      >
        <Menu.Item key='module1'>
          <FontAwesomeIcon icon={faArrowRight} />{' '}
          Module 1
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key='subMenu2'
        title={
          <span>
            <FontAwesomeIcon icon={faCog} />{' '}
            <span>Administration</span>
          </span>
        }
      >
        <Menu.Item key='reset'>
          <FontAwesomeIcon icon={faFileAlt} /> Sign Out
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}
