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
            {coreState.user !== CoreEnums.values.AUTHENTICATED ? (
              <FontAwesomeIcon
                icon={faBars}
                className='menu-left'
              />
            ) : null}
            <div className='header-title'>
              {coreState.general.title}
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className='menu-right'
            />
            {coreState.user === CoreEnums.values.AUTHENTICATED ? (
              <Dropdown
                overlay={
                  <div />
                }
                className='user-menu'
              >
                <FontAwesomeIcon
                  icon={faUser}
                />
              </Dropdown>
            ) : null}
            {coreState.user === CoreEnums.values.AUTHENTICATED ? (
              <div>Team Menu</div>
            ) : null}
          </div>
        </Header>
      </Layout>
    </>
  )
}
