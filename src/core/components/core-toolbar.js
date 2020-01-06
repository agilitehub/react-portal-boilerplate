import React, {} from 'react'
import { useSelector } from 'react-redux'
import { Layout, Drawer, Menu, Dropdown, Modal, Input, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

import CoreEnums from '../resources/enums'

const { Header } = Layout

export default function CoreToolbar () {
  const coreState = useSelector(state => state.core)

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: coreState.theme.primary,
            color: coreState.theme.white
          }}
          className='toolbar-header'
        >
          <div className='header-content'>
            {coreState.toolbar.state.leftMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-left'
              />
            ) : null}
            <div className='header-title'>
              {coreState.toolbar.state.title}
            </div>
            {coreState.toolbar.state.customMenu1 ? (
              <coreState.toolbar.state.customMenu1 />
            ) : null}
            {coreState.toolbar.state.customMenu2 ? (
              <coreState.toolbar.state.customMenu2 />
            ) : null}
            {coreState.toolbar.state.rightMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-right'
              />
            ) : null}
          </div>
        </Header>
      </Layout>
    </>
  )
}
