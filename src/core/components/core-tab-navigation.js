import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd'

import CoreEnums from '../resources/enums'
import { closeTab } from '../core-utils'

const TabPane = Tabs.TabPane

export default function CoreTabNavigation () {
  const dispatch = useDispatch()
  const tabNavigationState = useSelector(state => state.core.tabNavigation)
  const activeKey = tabNavigationState.activeKey

  // Here we set up the default Root Tab on load and if tabs array is empty
  if (tabNavigationState.tabs.length === 0) {
    dispatch({
      type: CoreEnums.reducers.SET_TABS,
      tabs: tabNavigationState.tabs,
      payload: {
        content: <tabNavigationState.rootTabContent />,
        title: tabNavigationState.rootTabTitle,
        key: CoreEnums.values.CORE_ROOT,
        app: CoreEnums.values.CORE_ROOT,
        closable: false,
        custom: {}
      }
    })
  }

  // Executed when clicking on the close icon
  function handleOnEdit (targetKey) {
    // Find Tab in Array and check if onEdit is overriden
    const targetTab = tabNavigationState.tabs.find(tab => {
      return tab.key === targetKey
    })

    if (targetTab.handleOnEdit) {
      targetTab.handleOnEdit(targetKey, (canClose) => {
        if (canClose) {
          closeTab(activeKey, targetKey, tabNavigationState.tabs, dispatch)
        }
      })
    } else {
      closeTab(activeKey, targetKey, tabNavigationState.tabs, dispatch)
    }
  }

  // handleOnChange (key) {
  //   props.changeTab(key, props.tabs)
  // }

  // handlePromptTabClose (key) {
  //   let tmpValue = false

  //   // Loop through the activeEntries
  //   for (const x in MemoryStore.activeEntries) {
  //     // if the current tab key that was passed matches the activeEntry id
  //     if (key === MemoryStore.activeEntries[x]._id) {
  //       // if the activeEntry is modified
  //       if (MemoryStore.activeEntries[x].custom.isModified) {
  //         tmpValue = true
  //       }
  //     }
  //   }

  //   if (tmpValue) {
  //     Modal.confirm({
  //       onOk: () => this.handleOnEdit(key),
  //       okText: CoreEnums.values.YES_PROPER,
  //       cancelText: CoreEnums.values.NO_PROPER,
  //       content: CoreEnums.messages.CANCEL_CONTENT,
  //       title: CoreEnums.values.CONFIRMATION,
  //       centered: true,
  //       width: 500
  //     })
  //   } else {
  //     this.handleOnEdit(key)
  //   }
  // }

  return (
    <Tabs
      type='editable-card'
      hideAdd
      activeKey={activeKey}
      onEdit={handleOnEdit}
      // onChange={this.handleOnChange}
      tabBarStyle={{ textAlign: 'left' }}
      animated={false}
    >
      {tabNavigationState.tabs.map(pane => (
        <TabPane
          forceRender
          tab={pane.title}
          key={pane.key}
          closable={pane.closable}
        >
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  )
}
