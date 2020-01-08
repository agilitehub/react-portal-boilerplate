import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd'

import CoreEnums from '../resources/enums'

const TabPane = Tabs.TabPane

export default function CoreTabNavigation () {
  const dispatch = useDispatch()
  const tabNavigationState = useSelector(state => state.core.tabNavigation)
  const [activeKey, setActiveKey] = useState(CoreEnums.values.CORE_ROOT)

  useEffect(() => {
    // Here we set up the default Root Tab on load
    dispatch({
      type: CoreEnums.reducers.SET_TABS,
      payload: {
        content: <tabNavigationState.rootTabContent />,
        title: tabNavigationState.rootTabTitle,
        key: CoreEnums.values.CORE_ROOT,
        app: CoreEnums.values.CORE_ROOT,
        closable: false,
        custom: {}
      }
    })
  }, [])

  // useEffect(() => {
  //   if (props.activeKey !== activeKey) {
  //     setActiveKey(nextProps.activeKey)
  //   }

  //   if (props.tabs.length === 0) {
  //     props.addTab({
  //       content: <CoreTabHome />,
  //       title: CoreEnums.values.HOME,
  //       key: CoreEnums.facets.HOME,
  //       app: CoreEnums.facets.HOME,
  //       tabType: '',
  //       closable: false
  //     })
  //   }
  // })

  // handleOnEdit (targetTab) {
  //   props.closeTab(activeKey, targetTab, props.tabs)
  // }

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
      // onEdit={this.handlePromptTabClose}
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
