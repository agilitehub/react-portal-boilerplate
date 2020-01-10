import React, { useState } from 'react'
import { Layout, Drawer } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import CoreMemoryStore from '../core-memory-store'

const { Header } = Layout

export default function CoreToolbar (props) {
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
            {props.leftMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-left'
                onClick={handleOpenLeftMenu}
              />
            ) : null}
            <div className='header-title'>
              {props.title}
            </div>
            {props.customMenu1 ? (
              <props.customMenu1 />
            ) : null}
            {props.customMenu2 ? (
              <props.customMenu2 />
            ) : null}
            {props.rightMenu.enabled ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-right'
                onClick={handleOpenRightMenu}
              />
            ) : null}
          </div>
        </Header>
      </Layout>
      {props.leftMenu.enabled ? (
        <Drawer
          title={props.leftMenu.title}
          placement='left'
          closable={false}
          width={300}
          onClose={handleCloseLeftMenu}
          visible={leftMenuVisible}
          style={{ '--primary': CoreMemoryStore.theme.primary, '--white': CoreMemoryStore.theme.white, '--whiteGrey': CoreMemoryStore.theme.whiteGrey }}
          className='menu-drawer'
        >
          {props.leftMenu.enabled && props.leftMenu.content ? (
            <props.leftMenu.content handleCloseLeftMenu={handleCloseLeftMenu} />
          ) : null}
        </Drawer>
      ) : null}
      {props.rightMenu.enabled ? (
        <Drawer
          title={props.rightMenu.title}
          placement='right'
          closable={false}
          width={300}
          onClose={handleCloseRightMenu}
          visible={rightMenuVisible}
          style={{ '--primary': CoreMemoryStore.theme.primary, '--white': CoreMemoryStore.theme.white, '--whiteGrey': CoreMemoryStore.theme.whiteGrey }}
          className='menu-drawer'
        >
          {props.rightMenu.enabled && props.rightMenu.content ? (
            <props.rightMenu.content handleCloseRightMenu={handleCloseRightMenu} />
          ) : null}
        </Drawer>
      ) : null}
    </>
  )
}
