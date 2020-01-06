import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Drawer, Menu, Dropdown, Modal, Input, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import CoreEnums from '../resources/enums'

const { Header } = Layout

export default function CoreToolbar () {
  const coreState = useSelector(state => state.core)

  const [leftMenuVisible, setLeftMenuVisible] = useState(false)
  const [rightMenuVisible, setRightMenuVisible] = useState(false)

  function handleOpenLeftMenu () {
    setLeftMenuVisible(true)
  }

  function handleCloseLeftMenu () {
    setLeftMenuVisible(false)
  }

  function handleOpenRightMenu () {
    setRightMenuVisible(true)
  }

  function handleCloseRightMenu () {
    setRightMenuVisible(false)
  }

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
                onClick={handleOpenLeftMenu}
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
                onClick={handleOpenRightMenu}
              />
            ) : null}
          </div>
        </Header>
      </Layout>
      {coreState.toolbar.state.leftMenu.enabled ? (
        <Drawer
          title={CoreEnums.values.PORTAL_MENU}
          placement='left'
          closable={false}
          width={300}
          onClose={handleCloseLeftMenu}
          visible={leftMenuVisible}
          style={{ '--primary': coreState.theme.primary, '--white': coreState.theme.white, '--whiteGrey': coreState.theme.whiteGrey }}
          className='menu-drawer'
        />
      ) : null}
      {coreState.toolbar.state.rightMenu.enabled ? (
        <Drawer
          title={coreState.toolbar.state.rightMenu.title}
          placement='right'
          closable={false}
          width={300}
          onClose={handleCloseRightMenu}
          visible={rightMenuVisible}
          style={{ '--primary': coreState.theme.primary, '--white': coreState.theme.white, '--whiteGrey': coreState.theme.whiteGrey }}
          className='menu-drawer'
        >
          {coreState.toolbar.state.rightMenu.enabled && coreState.toolbar.state.rightMenu.component ? (
            <coreState.toolbar.state.rightMenu.component handleCloseRightMenu={handleCloseRightMenu} />
          ) : null}
        </Drawer>
      ) : null}
    </>
  )
}
