import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout, Drawer, Dropdown, Modal, Input, message } from 'antd'
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
            backgroundColor: coreState.general.theme.primary,
            color: coreState.general.theme.white
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
          title={coreState.toolbar.state.leftMenu.title}
          placement='left'
          closable={false}
          width={300}
          onClose={handleCloseLeftMenu}
          visible={leftMenuVisible}
          style={{ '--primary': coreState.general.theme.primary, '--white': coreState.general.theme.white, '--whiteGrey': coreState.general.theme.whiteGrey }}
          className='menu-drawer'
        >
          {coreState.toolbar.state.leftMenu.enabled && coreState.toolbar.state.leftMenu.content ? (
            <coreState.toolbar.state.leftMenu.content handleCloseLeftMenu={handleCloseLeftMenu} />
          ) : null}
        </Drawer>
      ) : null}
      {coreState.toolbar.state.rightMenu.enabled ? (
        <Drawer
          title={coreState.toolbar.state.rightMenu.title}
          placement='right'
          closable={false}
          width={300}
          onClose={handleCloseRightMenu}
          visible={rightMenuVisible}
          style={{ '--primary': coreState.general.theme.primary, '--white': coreState.general.theme.white, '--whiteGrey': coreState.general.theme.whiteGrey }}
          className='menu-drawer'
        >
          {coreState.toolbar.state.rightMenu.enabled && coreState.toolbar.state.rightMenu.content ? (
            <coreState.toolbar.state.rightMenu.content handleCloseRightMenu={handleCloseRightMenu} />
          ) : null}
        </Drawer>
      ) : null}
    </>
  )
}
