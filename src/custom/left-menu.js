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
  const rootTabContent = useSelector(state => state.core.tabNavigation.rootTabContent)

  function handleLeftMenu (e) {
    const key = e.key
    let Content = null

    // MODULECONDITION
    switch (key) {
      case CoreEnums.values.CORE_ROOT:
        Content = rootTabContent
        props.handleCloseLeftMenu()

        dispatch({
          type: CoreEnums.reducers.SET_TABS,
          payload: {
            content: <Content />,
            title: rootTabTitle,
            key,
            app: key,
            custom: {}
          }
        })

        break
      case 'module1':
        Content = require('./module1-content').default
        props.handleCloseLeftMenu()

        dispatch({
          type: CoreEnums.reducers.SET_TABS,
          payload: {
            content: <Content />,
            title: 'Module 1',
            key,
            app: key,
            custom: {}
          }
        })

        break
      default:
        // Do Nothing
        return null
    }
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
        <Menu.Item key='about'>
          <FontAwesomeIcon icon={faFileAlt} /> About
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}
