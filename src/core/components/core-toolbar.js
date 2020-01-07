import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout, Drawer, Dropdown, Modal, Input, message } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import CoreEnums from '../resources/enums'
import CoreMemoryStore from '../core-memory-store'

const { Header } = Layout

export default function CoreToolbar () {
  const toolbarState = useSelector(state => state.core.toolbar)

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
            backgroundColor: CoreMemoryStore.theme.primary,
            color: CoreMemoryStore.theme.white
          }}
          className='toolbar-header'
        >
          <div className='header-content'>
            {toolbarState.state.leftMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-left'
                onClick={handleOpenLeftMenu}
              />
            ) : null}
            <div className='header-title'>
              {toolbarState.state.title}
            </div>
            {toolbarState.state.customMenu1 ? (
              <toolbarState.state.customMenu1 />
            ) : null}
            {toolbarState.state.customMenu2 ? (
              <toolbarState.state.customMenu2 />
            ) : null}
            {toolbarState.state.rightMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-right'
                onClick={handleOpenRightMenu}
              />
            ) : null}
          </div>
        </Header>
      </Layout>
      {toolbarState.state.leftMenu.enabled ? (
        <Drawer
          title={toolbarState.state.leftMenu.title}
          placement='left'
          closable={false}
          width={300}
          onClose={handleCloseLeftMenu}
          visible={leftMenuVisible}
          style={{ '--primary': CoreMemoryStore.theme.primary, '--white': CoreMemoryStore.theme.white, '--whiteGrey': CoreMemoryStore.theme.whiteGrey }}
          className='menu-drawer'
        >
          {toolbarState.state.leftMenu.enabled && toolbarState.state.leftMenu.content ? (
            <toolbarState.state.leftMenu.content handleCloseLeftMenu={handleCloseLeftMenu} />
          ) : null}
        </Drawer>
      ) : null}
      {toolbarState.state.rightMenu.enabled ? (
        <Drawer
          title={toolbarState.state.rightMenu.title}
          placement='right'
          closable={false}
          width={300}
          onClose={handleCloseRightMenu}
          visible={rightMenuVisible}
          style={{ '--primary': CoreMemoryStore.theme.primary, '--white': CoreMemoryStore.theme.white, '--whiteGrey': CoreMemoryStore.theme.whiteGrey }}
          className='menu-drawer'
        >
          {toolbarState.state.rightMenu.enabled && toolbarState.state.rightMenu.content ? (
            <toolbarState.state.rightMenu.content handleCloseRightMenu={handleCloseRightMenu} />
          ) : null}
        </Drawer>
      ) : null}
    </>
  )
}
